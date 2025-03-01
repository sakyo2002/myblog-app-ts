import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://ffalgqlxregokogtadrb.supabase.co'; // プロジェクトのURL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmYWxncWx4cmVnb2tvZ3RhZHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTU2NTEsImV4cCI6MjA0NzU5MTY1MX0.RA1KQvGEYTd3yGkQYW5aiG2nOtaIdAjh9azfg7CfsZA'; // 先ほどコピーしたanonキー

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function createPost(title, description) {

  // 正規表現でコードブロックを検出
  const codeBlockRegex = /`{3}([\s\S]*?)`{3}/g;

  const formattedContent = description.replace(
    codeBlockRegex,
    (match, code) => {
      // すでに言語指定がある場合はそのまま返す
      if (match.startsWith('```javascript') ||
          match.startsWith('```python') ||
          match.startsWith('```html') /* etc... */) {
        return match;
      }
      // 言語指定がない場合はjavascriptを追加
      return `\`\`\`javascript\n${code.trim()}\n\`\`\``;
    }
  );

  const { data, error } = await supabase
  .from('posts')
  .insert([
    { title,
      description: formattedContent,
      date: new Date().toISOString(),
    }
  ])
  .select('*');

  if (error) {
    console.error('Supabase error:', error); // エラーの詳細を確認
  }
  return data;
}

export async function handleSubmit(event, { title, description }) {
  event.preventDefault();

  try {
    createPost(title, description)
  } catch(error) {
    console.error('Error creating post:', error);
    console.log({ title, tag, description });  // デバッグ用にログを出力
  }
};