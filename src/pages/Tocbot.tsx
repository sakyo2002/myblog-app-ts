import { useEffect, useState, useCallback } from 'react';
import * as tocbot from 'tocbot';
import '../styles/Toc.css';

interface HeadingPosition {
  id: string;
  top: number;
}

export const Toc: React.FC = () => {
  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
  let timeoutId: number | null = null;
  
  // 初期化時に最初の見出しをアクティブに設定
  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3');
    if (headings.length > 0) {
      setActiveHeadingId(headings[0].id);
    }
  }, []);

  const calculateHeadingPositions = useCallback<() => HeadingPosition[]>(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3'));
    const positions = headings.map(heading => ({
      id: heading.id,
      top: heading.getBoundingClientRect().top + window.scrollY,
    }));
  
  return positions.sort((a, b) => a.top - b.top);
  }, []);

  const findActiveHeading = useCallback((headingPositions: HeadingPosition[]) => {
    if (!headingPositions.length) return null;
    
    const scrollPosition = window.scrollY;
    let selectedId = null;

    // スクロール位置より上にある最後の見出しを探す
    for (let i = 0; i < headingPositions.length; i++) {
      const current = headingPositions[i];
      
      if (scrollPosition >= current.top - 300) {
        selectedId = current.id;
      } else {
        break;
      };
    }
    return selectedId;
  }, []);

  const handleScroll = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      const headingPositions = calculateHeadingPositions();
      const newActiveId = findActiveHeading(headingPositions);
      if (newActiveId !== activeHeadingId) {
        setActiveHeadingId(newActiveId);
      }
      timeoutId = null;
    }, 100); // スクロール処理の遅延時間
  }, [activeHeadingId, calculateHeadingPositions, findActiveHeading])

  useEffect(() => {
    let headingPositions = calculateHeadingPositions();

    // tocbotの初期化
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.content',
      headingSelector: 'h2, h3',
      scrollSmooth: false,
      scrollSmoothDuration: 400,
      scrollOffset: 300,
      headingsOffset: 300,
      orderedList: false,
      linkClass: 'toc-link',
      activeLinkClass: 'is-active-link',
      listClass: 'toc-list',
      listItemClass: 'toc-list-item',
      activeListItemClass: 'is-active-li',
      hasInnerContainers: true,
    });
    

    window.addEventListener('scroll', handleScroll, { capture: true });
    window.addEventListener('resize', () => {
      headingPositions = calculateHeadingPositions();
    });

    return () => {
      tocbot.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // アクティブな見出しの状態を更新
  useEffect(() => {
    if (!activeHeadingId) return;

    const allTocLinks = document.querySelectorAll('.toc-link');
    const newActiveLink = document.querySelector(`a[href="#${activeHeadingId}"]`);

    allTocLinks.forEach(link => {
      if (link === newActiveLink) {
        link.classList.add('is-active-link');
        link.closest('.toc-list-item')?.classList.add('is-active-li');
      } else {
        link.classList.remove('is-active-link');
        link.closest('.toc-list-item')?.classList.remove('is-active-li');
      }
    });
  }, [activeHeadingId]);

  return (
    <nav
      className="toc"
      style={{
        position: 'sticky',
        top: '120px',
        maxHeight: 'calc(100vh - 120px)',
        overflowY: 'auto',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
};