import { Toolbar, Box, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { TabButton } from './CustomTools';
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
  const pages = ['Courses', 'Testimonials', "FAQ's", 'Help', 'About Me'];
  return (
    <AppBar elevation={0} position='static'>
      <Toolbar
        disableGutters
        sx={{
          pt: '16.88px',
          paddingX: { xs: '20px', md: '54px', justifyContent: 'space-between' },
        }}
      >
        <Box
          component='img'
          src='assets/madlabslogo.svg'
          sx={{
            objectFit: 'contain',
            width: '124.02px',
            height: '25.24px',
          }}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            pr: { xs: '20px', md: '54px' },
            gap: '40px',
          }}
        >
          {pages.map((page) => (
            <TabButton key={page}>{page}</TabButton>
          ))}
        </Box>
        <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
