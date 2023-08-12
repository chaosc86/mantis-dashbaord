// material-ui
import { Box, IconButton, Link, useMediaQuery, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';
import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../../../../themes';

// project import
import Search from './Search';
import Profile from './Profile';
// import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //
const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [slot, setSlot] = useState('en');
  const { mode, setMode } = useContext(ThemeContext);
  const support_lang = { en: true, zh_TW: true };
  const switchLang = (lang) => {
    if (lang === null) return;
    setSlot(lang);
    localStorage.setItem('Language', lang);
    i18n.changeLanguage(lang);
  };
  const switchTheme = (theme) => {
    if (theme === null) return;
    localStorage.setItem('theme', theme);
    setMode(theme);
  };
  useEffect(() => {
    if (
      !localStorage.getItem('Language') ||
      localStorage.getItem('Language') === undefined ||
      support_lang?.[localStorage.getItem('Language')] === undefined
    )
      return switchLang(slot);
    switchLang(localStorage.getItem('Language'));
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === undefined) return switchTheme(mode);
  }, []);

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      {
        <ToggleButtonGroup
          color="primary"
          value={localStorage.getItem('theme') || mode}
          exclusive
          aria-label="text alignment"
          onChange={(e, value) => {
            switchTheme(value);
          }}
        >
          <ToggleButton size="small" value="light" aria-label="Light Theme">
            Light
          </ToggleButton>

          <ToggleButton sx={{ mr: 1 }} size="small" value="dark" aria-label="Dark Theme">
            Dark
          </ToggleButton>
        </ToggleButtonGroup>
      }
      {
        <ToggleButtonGroup
          color="primary"
          value={slot || 'en'}
          exclusive
          aria-label="text alignment"
          onChange={(e, value) => {
            switchLang(value);
          }}
        >
          <ToggleButton size="small" value="en" aria-label="English">
            En
          </ToggleButton>
          <ToggleButton sx={{ mr: 1 }} size="small" value="zh_TW" aria-label="Standard Chinese">
            zh_TW
          </ToggleButton>
        </ToggleButtonGroup>
      }
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
