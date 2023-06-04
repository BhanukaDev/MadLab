/* eslint-disable react/prop-types */
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { CustomRdRating, Image, RLabel } from '../CustomTools';

export const CourseCard = ({
  type = 'small' | 'medium' | 'large',
  title,
  tag,
  media,
  mdDS,
  rating = 4.5,
  ratingAmount = 120,
  sessions = 1,
  position,
  top,
  right,
  width,
  mt,
}) => {
  return (
    <Button
      sx={{
        padding: '0px',
        margin: '0px',
        textTransform: 'unset',
        position: position,
        top: top,
        right: right,
        mt: mt,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: type === 'medium' ? '8.98px' : '0px',
          pb: '0px',
          maxWidth:
            type === 'small'
              ? '100px'
              : type === 'large'
              ? '405px'
              : '334.52px',
          width: width,
          height: 'fit-content',
          boxShadow: type === 'large' ? '0' : '10px 10px 40px rgba(0,0,0,0.1)',
          borderRadius: '10px',
        }}
      >
        <Box
          sx={{
            maxWidth:
              type === 'small'
                ? '100px'
                : type === 'large'
                ? '405px'
                : '334.52px',
            borderRadius: '10px',
            overflow: 'hidden',
            aspectRatio: '1.33',
          }}
        >
          <Image src={media} mdDS={mdDS} className='courseCardImg' />
        </Box>
        <Box mx={'18px'}>
          {tag}
          <Typography
            variant='subtitle1'
            textAlign='left'
            mb='12px'
            minHeight='54px'
          >
            {title}
          </Typography>
          <Box
            height={'20px'}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RLabel
              sx={{
                fontFamily: ['Lato', 'sans-serif'].join(','),
                fontWeight: 400,
                fontSize: type === 'large' ? '15px' : '14px',
                lineHeight: type === 'large' ? '18px' : '17px',
                color: '#000000',
                mr: type === 'large' ? '9px' : '6px',
              }}
            >
              {rating}
            </RLabel>
            <CustomRdRating value={rating} />
            <RLabel
              sx={{
                color: '#747579',
                ml: type === 'large' ? '9px' : '8px',
              }}
            >
              ({ratingAmount})
            </RLabel>
          </Box>
          <Divider
            sx={{
              mt: '19px',
              mb: '11px',
            }}
          />
          <Box
            sx={{
              display: 'flex',

              justifyContent: type === 'large' ? 'space-between' : 'end',
              alignItems: 'baseline',
            }}
          >
            <Box display={type === 'large' ? 'block' : 'none'}>
              <Typography variant='price'>Rs.1000</Typography>
              <Typography variant='session'> / session</Typography>
            </Box>

            <Box display={'flex'} gap={'6.5px'}>
              <Image
                src='src/assets/sesIcon.svg'
                width={'15px'}
                height={'14.97px'}
                bgcolor='transparent'
              />
              <Typography
                variant='session'
                mb={'25px'}
                sx={{
                  fontSize: '15px',
                  lineHeight: '18px',
                  textAlign: 'right',
                  color: '#25292D',
                }}
              >
                {sessions} {sessions > 1 === true ? 'sessions' : 'session'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Button>
  );
};
