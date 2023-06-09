import { Box, Typography } from '@mui/material';

export const PayAsGoPage = () => {
  return (
    <Box
      sx={{
        display: { sm: 'block', md: 'flex' },
        pl: { xs: '30px', md: '40px', lg: '92px' },
        pr: { xs: '30px', md: '61px', lg: '122px' },
      }}
    >
      <Box mt={'69px'}>
        <Box
          sx={{
            backgroundImage: 'url("assets/Courses Images/payasgo.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: { md: '550px', lg: '735px' },
            height: '648px',
            display: { xs: 'none', md: 'block' },
          }}
        />
      </Box>
      <Box>
        <Typography
          variant='h2'
          sx={{
            mt: { xs: '100px', md: '229px' },
            mb: { xs: '40px', md: '30px' },
          }}
        >
          No more hassle,
          <br /> Pay as you go
        </Typography>
        <Typography mb={{ xs: '100px', md: '234px' }}>
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
