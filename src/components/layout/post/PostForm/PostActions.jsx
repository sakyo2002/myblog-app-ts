import React, { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import CodeSproutIcon from '../../../../Icons/CodeSproutIcon';
import { PostSuccessDialog } from '../PostSuccessDialog';
import { PostErrorDialog } from '../PostErrorDialog';
import { useNavigate } from 'react-router-dom';
import { handleSubmit } from '../../../../utils/supabaseClient';

export default function PostActions({ title, description }) {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const navigate = useNavigate();

  // 入力値のバリデーション
  const validatePost = () => {
    if (!title.trim()) {
      setError("タイトルを入力してください。");
      return false;
    }
    if (!description.trim()) {
      setError("本文を入力してください。");
      return false;
    }
    return true;
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e, {
        title,
        description,
      })

      // バリデーションチェック
      if (!validatePost()) {
        setSaving(false);
        return;
      }

      setIsSuccessDialogOpen(true);
    } catch (error) {
      setIsErrorDialogOpen(true)
      console.error('Error submitting post:', error);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        p: 2,
      }}>
      <CodeSproutIcon />
      <Box>
        <Stack direction='row' spacing={2}>
          <Button variant='outlined'>下書き保存</Button>
          <Button variant='contained' color='primary' onClick={clickSubmit}>公開保存</Button>
        </Stack>
      </Box>
      <PostSuccessDialog
        open={isSuccessDialogOpen}
        onClose={() => setIsSuccessDialogOpen(false)}
      />
      <PostErrorDialog
        open={isErrorDialogOpen}
        onClose={() => setIsErrorDialogOpen(false)}
      />
    </Box>
  )
}