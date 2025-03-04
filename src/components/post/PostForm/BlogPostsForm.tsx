import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import PostActions from './PostActions';
import PostTitleInput from "./PostTitleInput";
import PostContentEditor from './PostContentEditor';
import IconsBar from "../../../Icons/IconsBar";
import MarkdownContent from "./MarkdownContent";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../utils/supabaseClient";
import { Database } from "@/types/supabase";

type Post = Database['public']['Tables']['posts']['Row'];

// Insert型定義
type PostInsert = Database['public']['Tables']['posts']['Insert'];

//エラーの型定義
interface ApiError {
  message: string;
}

interface BlogPostsFormProps {
  initialValues?: Post | null;
  isEdit?: boolean;
}

export default function BlogPostsForm({ initialValues = null, isEdit = false }: BlogPostsFormProps) {
  const navigate = useNavigate();
  const [showMarkdownGuide, setShowMarkdownGuide] = useState(false);
  const [title, setTitle] = useState(initialValues?.title || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //編集モードで初期値が変更された場合に更新
  useEffect(() => {
    if(initialValues) {
      setTitle(initialValues.title);
      setDescription(initialValues.description);
    }
  }, [initialValues])

  const handleSave = async (isDraft = false) => {
    try {
      setSaving(true);
      setError(null);

      // initialValuesがnullでないことを確認
      if (!initialValues) {
        throw new Error("初期値が設定されていません。");
      }

      const postData: PostInsert = {
        title,// 投稿のタイトル
        description,// 投稿の本文内容
        is_draft: isDraft,// 下書きかどうかのフラグ（true: 下書き, false: 公開）
        updated_at: new Date().toISOString(),// 更新日時（ISO形式の文字列）
      };

      let response;
      
      // 編集モード：既存の投稿を更新
      if (isEdit) {
        response = await supabase
        .from('posts')
        .update(postData)
        .eq('id', initialValues.id);
      } else {                         // 新規作成モード：新しい投稿を作成
        response = await supabase
        .from('posts')
        .insert([{ ...postData, created_at: new Date().toISOString() }])
      }

      if (response.error) throw response.error;

      // 保存成功後のリダイレクト
      navigate(isEdit ? `/post/${initialValues.id}` : '/');
    } catch (error) {
      const apiError = error as ApiError;
      setError(apiError.message);
      console.log('保存中にエラーが発生しました', error)
    }finally {
      setSaving(false);
    }
  }

  const handleImageUpload = (imageUrl: string) => {
    setDescription((prev) => prev + `\n\n![画像](${imageUrl})\n\n`);
  }

  return (
    <Box
      sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Box sx={{ display: 'flex' }}>
        <IconsBar
          onImageUpload={handleImageUpload}
          onMarkdownGuideToggle={() => setShowMarkdownGuide(!showMarkdownGuide)}
        />

        <MarkdownContent isVisible={showMarkdownGuide} />

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: showMarkdownGuide ? '300px' : '0',
            transition: 'margin-left 0.4s ease-in-out', // この行を追加

            }}
          >
          <PostActions
            title={title}
            description={description}
            onSave={handleSave}
            saving={saving}
            error={error}
            isEdit={isEdit}
          />
          <Box sx={{ width: '620px', margin: '50px auto 0' }}>
            <PostTitleInput
              value={title}
              onChange={setTitle}
              disabled={saving}
              sx={{ flex: '0 0 auto' }}
            />
            <PostContentEditor
              value={description}
              onChange={setDescription}
              disabled={saving}
              sx={{ flex: 1 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
