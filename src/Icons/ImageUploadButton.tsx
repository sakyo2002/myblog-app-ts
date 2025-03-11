import { useState, useRef } from "react";
import { Box, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { supabase } from "../utils/supabaseClient";

const supabaseUrl = 'https://ffalgqlxregokogtadrb.supabase.co'; // プロジェクトのURL

interface ImageUploadButtonProps {
  onImageUpload: (imageUrl: string) => void;
}

export const ImageUploadButton: React.FC<ImageUploadButtonProps> = ({ onImageUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // ファイルが選択されているか確認
    if (!event.target.files || event.target.files.length === 0) {
      setError('ファイルが選択されていません');
      return;
    }

    const file = event.target.files[0];
    console.log('選択されたファイル:', file); // ファイルが正しく選択されているか

    // 画像ファイルかどうかチェック
    if (!file.type.startsWith('image/')) {
      setError('画像ファイルを選択してください');
      return;
    }

    try {
      // ファイル名を英数字のみに変更
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      // Supabase に画像をアップロード
      const { data, error } = await supabase.storage
      .from('images')
      .upload(`${fileName}`, file);

      

      if (error) {
        console.error('エラー:', error);  // エラーがあれば表示
        setError('画像のアップロードに失敗しました');
        return;
      }

      const imageUrl = `${supabaseUrl}/storage/v1/object/public/images/${data.path}`
      console.log('アップロード成功:', imageUrl);
      // 親コンポーネント（IconsBar）に画像 URL を渡す
      onImageUpload(imageUrl);

    } catch (error) {
      console.log('画像のアップロードに失敗しました', error)
    }
  };

  return (
    <Box sx={{ mx: 1 }}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept='image/*'
        style={{ display: 'none' }}
      />
        <IconButton color='primary' aria-label='upload picture' component='span' onClick={handleClick}>
          <ImageIcon />
        </IconButton>
    </Box>
)
}