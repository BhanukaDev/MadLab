import { Box, Grid, Typography } from '@mui/material';
import { CourseCard } from '../CourseCard/CourseCard';
import { CourseButton, TagsBox } from '../CustomTools';

export const ProfessionalPage = () => {
  return (
    <Box
      height={'658px'}
      bgcolor='#F7E2A7'
      position={'relative'}
      sx={{
        backgroundImage: 'url("src/assets/Backgrounds/professional.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        px: '87px',
      }}
    >
      <Grid container pt='196px'>
        <Grid item md={12}>
          <Typography variant='h2' mb={'22px'}>
            For Professionals
          </Typography>
        </Grid>
        <Grid item md={12} mb={'40px'}>
          <Typography maxWidth={'522px'}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia des.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <CourseCard
            title='Docker & Kubernetes Course - 12 Sessions in 1'
            tag={<TagsBox type={'prof'} />}
            type='medium'
            media={'src/assets/Courses Images/dockerPrf.png'}
            sessions={13}
            position={'absolute'}
            top={'100px'}
            right={{ md: '448.8px', sm: '404px' }}
          />
        </Grid>
        <Grid item md={6}>
          <CourseCard
            title='Docker & Kubernetes Course - 12 Sessions in 1'
            tag={<TagsBox type={'prof'} />}
            type='medium'
            media={'src/assets/Courses Images/dockerPrf.png'}
            sessions={13}
            position={'absolute'}
            top={'122px'}
            right={{ md: '84.77px', sm: '40px' }}
          />
        </Grid>
        <Grid item>
          <CourseButton title='View Course' />
        </Grid>
      </Grid>
    </Box>
  );
};
{
  /* 

      
    */
}
