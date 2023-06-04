/* eslint-disable react/prop-types */
import { Box, Button, Typography, styled } from '@mui/material';

export const TabButton = styled(Button)(() => ({
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontStyle: 'normal',
  color: '#111827',
  padding: '4px 8px',
  textTransform: 'unset',
}));

export const TagsBox = ({
  type = 'prof' | 'centred' | 'students',
  mt = '17px',
  mb = '14px',
  ml,
  mr,
  padding = '4px 10px',
}) => {
  return (
    <Typography
      variant='subtitle2'
      sx={{
        bgcolor:
          type === 'prof'
            ? '#F7E5B566'
            : type === 'centred'
            ? '#B4A1DC66'
            : '#F7C29B66',
        color:
          type === 'prof'
            ? '#BC8C05'
            : type === 'centred'
            ? '#350B8C'
            : '#964306',
        padding: padding,
        borderRadius: '4px',
        maxWidth: 'fit-content',
        mt: mt,
        mb: mb,
        mr: mr,
        ml: ml,
      }}
    >
      {type === 'prof'
        ? 'Professional'
        : type === 'centred'
        ? 'Career Centred'
        : 'Students'}
    </Typography>
  );
};

export const Image = ({
  src,
  mdDS = 'Image',
  className,
  bgcolor = 'transparent',
  width,
  height,
  objectFit = 'cover',
  zIndex,
}) => {
  return (
    <Box
      sx={{
        width: width || '100%',
        height: height || '100%',
        zIndex: zIndex,
      }}
    >
      <img
        className={className}
        src={src}
        alt={mdDS}
        style={{
          objectFit: objectFit,
          width: '100%',
          height: '100%',
          backgroundColor: bgcolor,
        }}
      />
    </Box>
  );
};

export const RLabel = styled(Typography)((type) => ({
  fontFamily: ['Lato', 'sans-serif'].join(','),
  fontWeight: 400,
  fontSize: type === 'large' ? '15px' : '14px',
  lineHeight: type === 'large' ? '18px' : '17px',
  color: '#000000',
}));

export const CustomRdRating = ({ value = 2.8, max = 5 }) => {
  const fullStars = Array.from({ length: value }, (_, index) => (
    <Box
      p={'1px'}
      component='img'
      key={index}
      src='src/assets/starR.svg'
      height='15.89px'
      alt='star'
    />
  ));

  const halfStar =
    value - Math.floor(value) >= 0.5 ? (
      <Box
        p={'1px'}
        component='img'
        src='src/assets/halfStarR.svg'
        height='15.89px'
        alt='half star'
      />
    ) : null;

  const emptyStars = Array.from({ length: max - value }, (_, index) => (
    <Box
      p={'1px'}
      component='img'
      key={index}
      src='src/assets/emptyStarR.svg'
      height='15.89px'
      alt='star'
    />
  ));

  return (
    <Box display={'flex'} gap={'1.33px'}>
      {fullStars}
      {halfStar}
      {emptyStars}
    </Box>
  );
};

export const CourseButton = ({ title = 'My Butt', bgcolor = 'red' }) => {
  return (
    <Button
      variant={'contained'}
      disableElevation
      sx={{
        color: 'white',
        bgcolor: bgcolor,
        textTransform: 'unset',
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        padding: '16px 24px',
        borderRadius: '8px',
      }}
    >
      {title}
    </Button>
  );
};
