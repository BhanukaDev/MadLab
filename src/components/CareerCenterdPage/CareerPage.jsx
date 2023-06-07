import { Box, Typography } from '@mui/material';
import { CourseButton, TagsBox } from '../CustomTools';
import { CourseCard } from '../CourseCard/CourseCard';

export const CareerPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("assets/Backgrounds/centred.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row-reverse' },
        px: { xs: '25px', md: '0px' },
      }}
    >
      <Box
        sx={{
          width: { md: '60%', lg: '50%' },
          pr: { md: '80px', lg: '133px' },
          pl: { md: '20px', lg: '65px' },
          pt: { md: '150px', lg: '200px' },
        }}
      >
        <Typography variant='h2' mb={'22px'} mt={{ xs: '150px', md: '0px' }}>
          Career Centerd
        </Typography>
        <Typography mb={'32px'}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia des.
        </Typography>
        <CourseButton title='View Course' color='purpleButton' />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '40%', lg: '50%' },
          mb: '100px',
          pt: '100px',
          pl: { md: '80px', lg: '248px' },
          display: { xs: 'flex', md: 'block' },
          justifyContent: { xs: 'center', md: 'start' },
        }}
      >
        <CourseCard
          title='Full Stack Developer Bootcamp - 
          12 Sessions in 1'
          tag={<TagsBox type={'centred'} />}
          type='medium'
          media={'assets/Courses Images/crcentred.png'}
          sessions={13}
        />
      </Box>
    </Box>
  );
};
