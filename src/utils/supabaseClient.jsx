import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://ffalgqlxregokogtadrb.supabase.co'; // プロジェクトのURL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmYWxncWx4cmVnb2tvZ3RhZHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTU2NTEsImV4cCI6MjA0NzU5MTY1MX0.RA1KQvGEYTd3yGkQYW5aiG2nOtaIdAjh9azfg7CfsZA'; // 先ほどコピーしたanonキー

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function createPost(title, tag, description) {
  const { data, error } = await supabase
  .from('posts')
  .insert([
    { title, tag, description, date: new Date().toISOString() }
  ])
  .select('*');

  if (error) {
    console.error('Supabase error:', error); // エラーの詳細を確認
    throw error
  }
  return data;
}

export async function handleSubmit(event, { title, tag, description }) {
  event.preventDefault();

  try {
    createPost(title, tag, description)
  } catch(error) {
    console.error('Error creating post:', error);
    console.log({ title, tag, description });  // デバッグ用にログを出力
  }
};