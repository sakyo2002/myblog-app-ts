import { Box, Typography, Avatar, AvatarGroup } from '@mui/material';
import PropTypes from 'prop-types';

export const Author = ({ authors }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirectioin: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant='caption'>
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant='caption'>Oct 22, 2024</Typography>
    </Box>
  )
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}