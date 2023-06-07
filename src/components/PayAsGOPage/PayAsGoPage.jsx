import { Box, Typography } from '@mui/material';

export const PayAsGoPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        pl: '92px',
        pr: '122px',
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundImage: 'url("public/assets/Courses Images/payasgo.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '735px',
            height: '648px',
          }}
        />
      </Box>
      <Box>
        <Typography
          variant='h2'
          sx={{
            mt: '229px',
            mb: '30px',
          }}
        >
          No more hassle, Pay as you go
        </Typography>
        <Typography mb={'234px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostru.
          <br />
          <br />
          Sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostru.
        </Typography>
      </Box>
    </Box>
  );
};
