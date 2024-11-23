import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ffalgqlxregokogtadrb.supabase.co'; // プロジェクトのURL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmYWxncWx4cmVnb2tvZ3RhZHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTU2NTEsImV4cCI6MjA0NzU5MTY1MX0.RA1KQvGEYTd3yGkQYW5aiG2nOtaIdAjh9azfg7CfsZA'; // 先ほどコピーしたanonキー

export const supabase = createClient(supabaseUrl, supabaseAnonKey);