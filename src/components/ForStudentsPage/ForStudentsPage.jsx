import { Box, Grid, Typography } from '@mui/material';
import { CourseCard } from '../CourseCard/CourseCard';
import { CourseButton, TagsBox } from '../CustomTools';

export const ForStudentsPage = () => {
  return (
    <Box
      bgcolor='#F7E2A7'
      position={'relative'}
      sx={{
        backgroundImage: 'url("assets/Backgrounds/students.png")',
        backgroundRepeat: { xs: 'repeat', lg: 'no-repeat' },
        backgroundSize: { xs: 'auto', lg: 'cover' },
        backgroundPosition: { xs: 'left', lg: 'center' },
        px: { xs: '15px', md: '84.77px' },
        pb: '58px',
      }}
    >
      <Grid container columns={17}>
        <Grid item xs={17} lg={7}>
          <Grid container pl={'2.23px'}>
            <Grid item>
              <Typography
                variant='h2'
                mt={{ xs: '120px', md: '196px' }}
                sx={{ wordBreak: 'break-word' }}
              >
                For Students
              </Typography>
              <Typography mt={'22px'} mb={'40px'}>
                DDuis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia des.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CourseButton title={'View Course'} color='orangeButton' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={17} lg={10}>
          <Grid
            container
            justifyContent={{ xs: 'center', lg: 'space-between' }}
            pl={{ xs: '0px', lg: '48px' }}
            spacing={'29.19px'}
            columns={{ xs: 14, sm: 12, md: 12, lg: 12 }}
          >
            <Grid item xs={11} sm={5} md={5} lg={6}>
              <CourseCard
                title='GCE O/L ICT - 12 Sessions in 1'
                tag={<TagsBox type={'students'} />}
                type='medium'
                media={'assets/Courses Images/dockerPrf.png'}
                sessions={13}
                mt={{ xs: '80px', lg: '100px' }}
              />
            </Grid>
            <Grid item xs={11} sm={5} md={5} lg={6}>
              <CourseCard
                title='GCE A/L ICT - 12 Sessions in 1'
                tag={<TagsBox type={'students'} />}
                type='medium'
                media={'assets/Courses Images/aws.png'}
                sessions={13}
                mt={{ xs: '0px', sm: '80px', lg: '142px' }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
