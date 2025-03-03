import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';


const supabaseUrl = 'https://ffalgqlxregokogtadrb.supabase.co'; // プロジェクトのURL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmYWxncWx4cmVnb2tvZ3RhZHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTU2NTEsImV4cCI6MjA0NzU5MTY1MX0.RA1KQvGEYTd3yGkQYW5aiG2nOtaIdAjh9azfg7CfsZA'; // 先ほどコピーしたanonキー

// クライアントに型定義を追加
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// 投稿の型定義
interface Post {
  title: string;
  description: string;
  date: string;
}

// createPost関数の型定義
export async function createPost(
  title: string,
  description: string
): Promise<Post[] | null> {
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

// handleSubmitの型定義
interface SubmitData {
  title: string;
  description: string;
}

export async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
  { title, description }: SubmitData
): Promise<void> {
  event.preventDefault();

  try {
    createPost(title, description)
  } catch(error) {
    console.error('Error creating post:', error);
    console.log({ title, description });  // デバッグ用にログを出力
  }
};