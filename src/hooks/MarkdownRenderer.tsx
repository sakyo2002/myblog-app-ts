import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import removeMarkdown from 'remove-markdown';
import { Typography, Box } from '@mui/material';
import { Components } from 'react-markdown';
import { Node } from 'unist';

// 日本語を含む文字列を英数字のスラッグに変換する関数
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[\s\u3000]/g, '-')  // スペースとフルスペースをハイフンに変換
    .replace(/[^\w\u4e00-\u9faf\u3040-\u309f\u30a0-\u30ff\-]/g, '')      // 英数字とハイフン以外を削除
    .replace(/\-+/g, '-')         // 連続するハイフンを1つに
    .replace(/^-+|-+$/g, '');     // 先頭と末尾のハイフンを削除
};

interface MarkdownRendererProps {
  content: string;
  preview: boolean;
  maxLength: number;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, preview = false, maxLength }) => {
  if(preview) {
    const plainText = removeMarkdown(content);
    const truncated = plainText.length > maxLength
      ? `${plainText.slice(0, maxLength)}...`
      : plainText;

    return <Typography variant='body2' sx={{ color: '#808080' }}>{truncated}</Typography>
  }

  const customComponents: Components = {
    h1: ({ children }) => {
      const slug = children ? generateSlug(children.toString()) : '';
      return <h1 id={slug}>{children}</h1>
    },
    h2: ({ children }) => {
      const slug = children ? generateSlug(children.toString()) : '';
      return <h2 id={slug}>{children}</h2>
    },
    h3: ({ children }) => {
      const slug = children ? generateSlug(children.toString()) : '';
      return <h3 id={slug}>{children}</h3>
    },
    img: (props) => {
      return (
        <img
          {...props}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            margin: '16px auto',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      )
    },
    code: (props) => {
      // nodeのチェックを追加
      const node = props.node as Node & {
        tagName?: string,
        children?: { type: string }[]
      };

      const className = props.className || '';
      const match = /language-(\w+)/.exec(className || '');

      // インラインコードの安全な判定
      const isInline = node &&
        node.type === 'element' &&
        node.tagName === 'code' &&
        node.children &&
        node.children[0]?.type === 'text';

      return isInline && !match ? (
        //インラインコード
        <code
          style={{
            backgroundColor: '#f3f3f3',
            padding: '2px 4px',
            margin: '4px 2px',
            borderRadius: '4px',
            display: 'inline-flex',
            width: 'fit-content',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            color: '#333',
            fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
            fontSize: '0.9em'
          }}
        >
          {props.children}
        </code>
      ) : (
        <pre
          style={{
            backgroundColor: '#1e1e1e',
            padding: '16px',
            borderRadius: '6px',
            overflow: 'auto',
            whiteSpace: 'pre',
            margin: '16px 0',
            border: '1px solid #d0d7de',
            fontSize: '0.875em'
          }}
        >
          <code
            style={{
              display: 'block',
              color: '#f5f5f5',
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace',
              lineHeight: '1.45',
              wordWrap: 'normal',
              tabSize: 2,
            }}
          >
            {props.children}
          </code>
        </pre>
      );
    },
  }
  
  return (
    <Box>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={customComponents}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}





