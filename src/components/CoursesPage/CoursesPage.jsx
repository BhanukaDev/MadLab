import { Box, Grid, Typography } from '@mui/material';
import { CourseCard } from '../CourseCard/CourseCard';
import { TagsBox } from '../CustomTools';

export const CoursesPage = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: { xs: '15px', sm: '20px', lg: '85px' },
      }}
    >
      <Typography variant='h2' pt={'100px'}>
        Trending Courses
      </Typography>
      <Typography pt={'22px'} maxWidth={'800px'} mx={'auto'} mb={'50px'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Grid
        container
        justifyContent='center'
        columnSpacing={'25px'}
        rowSpacing={'35px'}
        pb={'85.49px'}
      >
        <Grid item lg={4}>
          <CourseCard
            title='Docker & Kubernetes Course - 12 Sessions in 1'
            tag={<TagsBox type={'prof'} />}
            type='large'
            media={'src/assets/Courses Images/docker.png'}
            sessions={3}
          />
        </Grid>
        <Grid item lg={4}>
          <CourseCard
            title='Full Stack Developer Bootcamp
            Course - 24 Sessions in 1'
            tag={<TagsBox type={'centred'} />}
            type='large'
            media={'src/assets/Courses Images/fullstack.png'}
            sessions={6}
          />
        </Grid>
        <Grid item lg={4}>
          <CourseCard
            title='GCE O/L ICT Course - 8 Sessions in 1'
            tag={<TagsBox type={'students'} />}
            type='large'
            media={'src/assets/Courses Images/ict.png'}
            sessions={9}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
