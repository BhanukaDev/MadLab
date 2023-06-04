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
        px: '84.77px',
        // display: 'flex',
      }}
    >
      <Grid container columns={17}>
        <Grid item xs={17} lg={7}>
          <Grid container pl={'2.23px'}>
            <Grid item>
              <Typography variant='h2' maxWidth={'522px'} mt={'196px'}>
                For Professionals
              </Typography>
              <Typography maxWidth={'522px'} mt={'22px'} mb={'40px'}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia des.
              </Typography>
            </Grid>
            <Grid item>
              <CourseButton title={'View Course'} bgcolor='#BE8C00' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={17} lg={10}>
          <Grid
            container
            justifyContent={'space-between'}
            pl={'48px'}
            spacing={'29.19px'}
          >
            <Grid item xs={6}>
              <CourseCard
                title='Docker & Kubernetes Course - 12 Sessions in 1'
                tag={<TagsBox type={'prof'} />}
                type='medium'
                media={'src/assets/Courses Images/dockerPrf.png'}
                sessions={13}
                mt={'100px'}
              />
            </Grid>
            <Grid item xs={6}>
              <CourseCard
                title='Docker & Kubernetes Course - 12 Sessions in 1'
                tag={<TagsBox type={'prof'} />}
                type='medium'
                media={'src/assets/Courses Images/dockerPrf.png'}
                sessions={13}
                mt={'122px'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

{
  /* 
<Box flexGrow={0.4109}>
<Typography variant='h2' maxWidth={'522px'}>
  For Professionals
</Typography>
<Typography maxWidth={'522px'}>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia des.
</Typography>
<CourseButton title={'View Course'} bgcolor='#BE8C00' />
</Box>
<Box flexGrow={0.5891} display={'flex'}>
<CourseCard
  title='Docker & Kubernetes Course - 12 Sessions in 1'
  tag={<TagsBox type={'prof'} />}
  type='medium'
  media={'src/assets/Courses Images/dockerPrf.png'}
  sessions={13}
/>
<CourseCard
  title='Docker & Kubernetes Course - 12 Sessions in 1'
  tag={<TagsBox type={'prof'} />}
  type='medium'
  media={'src/assets/Courses Images/dockerPrf.png'}
  sessions={13}
/>
</Box> 
*/
}
