import { useState } from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import { CodeSproutIcon } from '../../../Icons/CodeSproutIcon';
import { PostSuccessDialog } from '../PostSuccessDialog';
import { PostErrorDialog } from '../PostErrorDialog';
import { useNavigate } from 'react-router-dom';

interface PostActionsProps {
  title: string;
  description: string;
  onSave: (isDraft: boolean) => Promise<void>;
  saving: boolean;
}

export const PostActions = ({ title, description, onSave, saving }: PostActionsProps) => {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState<boolean>(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null)
  const navigate = useNavigate();

  // 入力値のバリデーション
  const validateInputs = () => {
    if (!title.trim()) {
      setValidationError("タイトルを入力してください。");
      return false;
    }
    if (!description.trim()) {
      setValidationError("本文を入力してください。");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const clickSubmit = async (event: React.MouseEvent<HTMLButtonElement>, isDraft: boolean) => {
    event.preventDefault();
    if (!validateInputs) return;

    try {
      await onSave(isDraft)
      setIsSuccessDialogOpen(true);

    } catch (error) {
      setIsErrorDialogOpen(true)
      console.error('Error submitting post:', error);
    }
  };

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
          <Button variant='outlined'>
            下書き保存
          </Button>
          <Button variant='contained' color='primary' onClick={(e) => clickSubmit(e, false)} disabled={saving}>
            公開保存
          </Button>
        </Stack>
      </Box>
      {validationError && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {validationError}
        </Typography>
      )}
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