import { Box, Grid, Typography } from '@mui/material';
import { StoryCard } from '../StoryCard';

export const CustomerFeedbackPage = () => {
  return (
    <Box
      sx={{
        px: '216px',
        bgcolor: '#F5F7F9',
        pb: '96px',
        position: 'relative',
      }}
    >
      <Box
        component={'img'}
        src='public/assets/“.svg'
        width={'142px'}
        position={'absolute'}
        sx={{
          top: '64px',
          left: '112px',
          opacity: '0.3',
        }}
      />
      <Grid container spacing={'32px'}>
        <Grid item xs={6}>
          <Grid container spacing={'32px'}>
            <Grid item>
              <Typography variant='h2' mt={'88px'} mb={'8px'}>
                Real Stories from <br /> Real Customers
              </Typography>
              <Typography mb={'56px'}>
                Get inspired by these stories.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'end',
              }}
            >
              <Box
                sx={{
                  width: '384px',
                  height: '396px',
                  //   bgcolor: 'green',
                }}
              >
                <StoryCard
                  client='Floyd Miles'
                  jobTitle='Vice President, GoPro'
                  story='To quickly start my startup landing page design, I was looking for a landing page UI Kit. Peepsy is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.'
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={'32px'}>
            <Grid item>
              <Box
                sx={{
                  width: '488px',
                  height: '312px',
                  //   bgcolor: 'blue',
                  mt: '164px',
                }}
              >
                <StoryCard
                  client='Jane Cooper'
                  jobTitle='CEO, Airbnb'
                  story='I used Peepsy and created a landing page for my startup within a week. The Peepsy UI Kit is simple and highly intuitive, so anyone can use it.'
                />
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  width: '384px',
                  height: '256px',
                  //   bgcolor: 'red'
                }}
              >
                <StoryCard
                  client='Kristin Watson'
                  jobTitle='Co-Founder, Strapi'
                  story='Peepsy saved our time in designing my company page.'
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
