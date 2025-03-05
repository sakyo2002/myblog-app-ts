import { Box, TextField } from "@mui/material";
import { SxProps } from "@mui/material";

interface PostContentEditorProps {
  value: string
  onChange: (value: string) => void;
  disabled?: boolean;
  sx: SxProps;
}

export default function PostContentEditor({ value, onChange, disabled, sx }: PostContentEditorProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        '& .MuiTextField-root': {
          height: '100%',
        },
        ...sx,
    }}>
      <TextField
        aria-label='本文'
        placeholder='エンジニアに関わる知識をMarkdown記法で書いて共有しよう'
        variant='standard'
        fullWidth
        value={value}
        onChange={handleChange}
        multiline
        minRows={5}
        disabled={disabled}
        InputProps={{
          disableUnderline: true,
          sx: {
            fontSize: '16px',
            margin: '16px 0',
            height: '100%',
            overflow: 'auto',
            '& input::placeholder, & textarea::placeholder': {
              textAlign: 'left',  // プレースホルダーの配置
              width: '100%'
            },
          }
        }}
        
      />
    </Box>
  )
}