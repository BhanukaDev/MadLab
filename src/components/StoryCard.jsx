/* eslint-disable react/prop-types */
import { Avatar, Box, Paper, Typography } from '@mui/material';

export const StoryCard = ({
  client = 'Unknown',
  jobTitle = 'CEO, Unknown',
  story = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  url,
}) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: '23px 32px',
        borderRadius: '8px',
        position: 'relative',
      }}
      elevation={3}
    >
      <Avatar src={url} sx={{ width: '55px', height: '55px' }} />
      <Box
        component={'img'}
        src='assets/quotes.svg'
        width={'15.93px'}
        position={'absolute'}
        sx={{
          top: '96px',
          left: '32px',
        }}
      />
      <Box pl={'32px'}>
        <Typography mt={'18px'}>{story}</Typography>
        <Typography
          variant='subtitle1'
          sx={{
            color: '#111827',
            fontSize: '18px',
            lineHeight: '28px',
            mt: '24px',
          }}
        >
          {client}
        </Typography>
        <Typography
          sx={{
            color: '#6B7280',
            fontSize: '14px',
            lineHeight: '20px',
            mb: '9px',
          }}
        >
          {jobTitle}
        </Typography>
      </Box>
    </Paper>
  );
};
