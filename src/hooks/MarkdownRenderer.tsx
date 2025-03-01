import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import removeMarkdown from 'remove-markdown';
import { Typography, Divider, Box } from '@mui/material';

// 日本語を含む文字列を英数字のスラッグに変換する関数
const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[\s\u3000]/g, '-')  // スペースとフルスペースをハイフンに変換
    .replace(/[^\w\u4e00-\u9faf\u3040-\u309f\u30a0-\u30ff\-]/g, '')      // 英数字とハイフン以外を削除
    .replace(/\-+/g, '-')         // 連続するハイフンを1つに
    .replace(/^-+|-+$/g, '');     // 先頭と末尾のハイフンを削除
};


export const MarkdownRenderer = ({ content, preview = false, maxLength }) => {
  
  if(preview) {
    const plainText = removeMarkdown(content);
    const truncated = plainText.length > maxLength
      ? `${plainText.slice(0, maxLength)}...`
      : plainText;

    return <Typography variant='body2' sx={{ color: '#808080' }}>{truncated}</Typography>
  }
  
  return (
    <Box>
    {/*マークダウン*/}
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        // 見出しコンポーネントをカスタマイズ
        h1: ({children, ...props}) => (
          <h1 id={generateSlug(children.toString())} {...props}>
            {children}
          </h1>
        ),
        h2: ({children, ...props}) => (
          <h2 id={generateSlug(children.toString())} {...props}>
            {children}
            <Divider />
          </h2>
        ),
        h3: ({children, ...props}) => (
          <h3 id={generateSlug(children.toString())} {...props}>
            {children}
          </h3>
        ),
        // 画像コンポーネントをカスタマイズ
        img: ({node, ...props}) => (
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
        ),
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && !match ? (
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
              {children}
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
                {children}
              </code>
            </pre>
          );
        },
      }}
    />
    </Box>
  )
}





