import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://ffalgqlxregokogtadrb.supabase.co'; // プロジェクトのURL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmYWxncWx4cmVnb2tvZ3RhZHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTU2NTEsImV4cCI6MjA0NzU5MTY1MX0.RA1KQvGEYTd3yGkQYW5aiG2nOtaIdAjh9azfg7CfsZA'; // 先ほどコピーしたanonキー

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

<<<<<<< HEAD
export async function createPost(title, description) {
  const { data, error } = await supabase
  .from('posts')
  .insert([
    { title, description, date: new Date().toISOString() }
=======
export async function createPost(title, tag, description) {
  const { data, error } = await supabase
  .from('posts')
  .insert([
    { title, tag, description, date: new Date().toISOString() }
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
  ])
  .select('*');

  if (error) {
    console.error('Supabase error:', error); // エラーの詳細を確認
    throw error
  }
  return data;
}

<<<<<<< HEAD
export async function handleSubmit(event, { title, description }) {
  event.preventDefault();

  try {
    createPost(title, description)
=======
export async function handleSubmit(event, { title, tag, description }) {
  event.preventDefault();

  try {
    createPost(title, tag, description)
>>>>>>> 21159d915c06a4a0fc6b953d6866fe6392abf34b
  } catch(error) {
    console.error('Error creating post:', error);
    console.log({ title, tag, description });  // デバッグ用にログを出力
  }
};