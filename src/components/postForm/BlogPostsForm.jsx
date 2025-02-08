import React from "react";
import { useEffect, useState } from "react";
import { Box } from '@mui/material';
import PostActions from './PostActions';
import PostTitleInput from "./PostTitleInput";
import PostContentEditor from './PostContentEditor';
import IconsBar from "./Icons/IconsBar";
import MarkdownContent from "./MarkdownContent";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";

export default function BlogPostsForm({ initialValues = null, isEdit = false }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialValues?.title || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

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
      setError(null)

      // バリデーションチェック
      if (!validatePost()) {
        setSaving(false);
        return;
      }

      const postData = {
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
    } catch (err) {
      setError(err.message);
      console.log('保存中にエラーが発生しました', err)
    }finally {
      setSaving(false);
    }
  }

  return (
    <Box
      fullWidth
      sx={{ backgroundColor: '#f5f5f5', p: 2, height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <PostActions
        title={title}
        description={description}
        onSave={handleSave}
        saving={saving}
        error={error}
        isEdit={isEdit}
      />
      <PostTitleInput
        value={title}
        onChange={setTitle}
        disabled={saving}
      />
      <IconsBar />
      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', height: '100%' }}>
        <Box sx={{ flex: 1 }}>
          <PostContentEditor
            value={description}
            onChange={setDescription}
            disabled={saving}
          />
        </Box>
        <Box sx={{ width: '400px' }}>
          <MarkdownContent />
        </Box>
      </Box>
    </Box>
  )
}
