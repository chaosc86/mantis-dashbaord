// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

// project import
import Search from './Search';
import Profile from './Profile';
// import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //
const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <IconButton
        component={Link}
        href="https://github.com/chaosc86/mantis-dashbaord"
        target="_blank"
        disableRipple
        color="secondary"
        title={t('Profile Page')}
        sx={{
          color: 'text.primary',
          bgcolor: theme.palette.background.paper,
          '&:hover': { bgcolor: theme.palette.background.default } /*'grey.100'*/
        }}
      >
        <GithubOutlined />
      </IconButton>

      {/*<Notification />*/}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
