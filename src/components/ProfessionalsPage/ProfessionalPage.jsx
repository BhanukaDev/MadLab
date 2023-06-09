import { Box, Grid, Typography } from '@mui/material';
import { CourseCard } from '../CourseCard/CourseCard';
import { CourseButton, TagsBox } from '../CustomTools';

export const ProfessionalPage = () => {
  return (
    <Box
      bgcolor='#F7E2A7'
      position={'relative'}
      sx={{
        backgroundImage: 'url("assets/Backgrounds/professional.png")',
        backgroundRepeat: { xs: 'repeat', lg: 'no-repeat' },
        backgroundSize: { xs: 'auto', lg: 'cover' },
        backgroundPosition: { xs: 'left', lg: 'center' },
        px: { xs: '15px', md: '84.77px' },
        pb: '78px',
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
                For Professionals
              </Typography>
              <Typography mt={'22px'} mb={'40px'}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia des.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CourseButton title={'View Course'} color='yellowButton' />
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
                title='Docker & Kubernetes Course -&nbsp;&nbsp; 12 Sessions in 1'
                tag={<TagsBox type={'prof'} />}
                type='medium'
                media={'assets/Courses Images/dockerPrf.png'}
                sessions={13}
                mt={{ xs: '80px', lg: '100px' }}
              />
            </Grid>
            <Grid item xs={11} sm={5} md={5} lg={6}>
              <CourseCard
                title='AWS - 12 Sessions in 1'
                tag={<TagsBox type={'prof'} />}
                type='medium'
                media={'assets/Courses Images/aws.png'}
                sessions={13}
                mt={{ xs: '0px', sm: '80px', lg: '122px' }}
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
