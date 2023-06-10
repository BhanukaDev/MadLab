import { Box, Grid, Grow, Slide, Typography } from '@mui/material';
import { Navbar } from '../Navbar';
import { CourseButton } from '../CustomTools';
import { useEffect, useState } from 'react';

export const LandingPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Grid container columns={20}>
        <Grid item xs={9} mt={'222px'} pr={'30px'}>
          <Grow in={animate}>
            <Box
              sx={{
                ml: '5.9027vw',
              }}
            >
              <Typography variant='h1' mb={'16px'}>
                I help you to <br /> build your skills
              </Typography>
              <Typography mb={'50px'}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </Typography>
              <CourseButton title={'Explore Courses'} color='orangeButton' />
            </Box>
          </Grow>
        </Grid>
        <Grid item xs={11}>
          <Slide in={animate} direction='left' timeout={500}>
            <Box
              mt={'81px'}
              width={'561px'}
              height={'651px'}
              sx={{
                backgroundImage: 'url("assets/man.png")',
              }}
            />
          </Slide>
        </Grid>
      </Grid>
    </>
  );
};
