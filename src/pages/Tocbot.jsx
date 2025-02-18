import React, { useEffect, useState, useCallback } from 'react';
import tocbot from 'tocbot';
import '../styles/Toc.css';

export const Toc = () => {
  const [activeHeadingId, setActiveHeadingId] = useState(null);
  
  // 初期化時に最初の見出しをアクティブに設定
  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3');
    if (headings.length > 0) {
      setActiveHeadingId(headings[0].id);
    }
  }, []);

  const calculateHeadingPositions = useCallback(() => {
  const headings = Array.from(document.querySelectorAll('h2, h3'));
  const positions = headings.map(heading => ({
    id: heading.id,
    top: heading.getBoundingClientRect().top + window.scrollY,
  }));
  
  return positions.sort((a, b) => a.top - b.top);
  }, []);

  const findActiveHeading = useCallback((headingPositions) => {
    if (!headingPositions.length) return null;
    
    const scrollPosition = window.scrollY;
    console.log('Current scroll position:', scrollPosition); // スクロール位置
    console.log('Active heading ID before:', activeHeadingId); // 現在のアクティブID
    
    let selectedId = null;
    // スクロール位置より上にある最後の見出しを探す
    for (let i = 0; i < headingPositions.length; i++) {
      const current = headingPositions[i];
      console.log(`Checking heading ${current.id}: top=${current.top}, adjusted=${current.top - 300}`);
      
      if (scrollPosition >= current.top - 300) {
        selectedId = current.id;
        console.log(`Selected heading: ${selectedId}`);
      } else {
        break;
      }
    }
    
    console.log('Final selected ID:', selectedId);
    return selectedId;
  }, [activeHeadingId]);

  useEffect(() => {
    let timeoutId;
    let headingPositions = calculateHeadingPositions();

    const handleScroll = () => {
      // スクロール中は処理をスキップ
      if (timeoutId) {
        return;
      }

      timeoutId = setTimeout(() => {
        const newActiveId = findActiveHeading(headingPositions);
        if (newActiveId !== activeHeadingId) {
          setActiveHeadingId(newActiveId);
        }
        timeoutId = null;
      }, 100); // スクロール処理の遅延時間
    };

    const handleResize = () => {
      headingPositions = calculateHeadingPositions();
    };

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      tocbot.destroy();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeHeadingId, calculateHeadingPositions, findActiveHeading]);

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