import { TextField, Box } from "@mui/material";
import { SxProps } from "@mui/material";

interface PostTitleInputProps {
  value: string
  onChange: (value: string) => void;
  disabled?: boolean;
  sx?: SxProps;
}

export default function PostTitleInput({ value, onChange, disabled, sx }: PostTitleInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ boxSizing: 'border-box', ...sx }}>
      <TextField
        aria-label='記事タイトル'
        variant='standard'
        placeholder='記事タイトル'
        fullWidth
        value={value}
        multiline
        minRows={1}
        maxRows={1}
        onChange={handleChange}
        disabled={disabled}
        InputProps={{
          disableUnderline: true,
          sx: {
            margin: '16px 0',
            fontSize: '35px',
            '& input::placeholder, & textarea::placeholder': {
              textAlign: 'left',  // プレースホルダーの配置
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%'
            },
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
            },
            '&:hover fieldset': {
              borderColor: '#c0c5c2', // ホバー時のボーダーの色を通常時と同じに設定
            },
            '& .MuiInputBase-input::placeholder': {
              fontSize: '16px', // プレースホルダーのフォントサイズ
              color: '#a0a0a0', // プレースホルダーの文字色
            },
          },
        }}
      />
    </Box>
  )
}