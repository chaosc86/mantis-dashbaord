import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

// material-ui
import { useTheme } from '@mui/material/styles';
import { List, ListItemButton, ListItemIcon, ListItemText, ToggleButtonGroup, ToggleButton, Typography, Box } from '@mui/material';
import { ThemeContext } from '../../../../../themes';

// assets
import {
  CommentOutlined,
  LockOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  UnorderedListOutlined,
  FontSizeOutlined,
  AlertOutlined
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
  const theme = useTheme();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
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
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32, color: theme.palette.grey[500] } }}>
      <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemIcon>
          <FontSizeOutlined />
        </ListItemIcon>
        <ListItemText primary={t('Language')} />
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
            <Typography noWrap>{t('En')}</Typography>
          </ToggleButton>
          <ToggleButton sx={{ mr: 1 }} size="small" value="zh_TW" aria-label="Standard Chinese">
            <Box>
              <Typography noWrap>{t('zh_TW')}</Typography>
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemIcon>
          <AlertOutlined />
        </ListItemIcon>
        <ListItemText primary={t('Theme')} />
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
            <Typography noWrap>{t('Light')}</Typography>
          </ToggleButton>

          <ToggleButton sx={{ mr: 1 }} size="small" value="dark" aria-label="Dark Theme">
            <Typography noWrap>{t('Dark')}</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemIcon>
          <QuestionCircleOutlined />
        </ListItemIcon>
        <ListItemText primary={t('Support')} />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary={t('Account Settings')} />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
        <ListItemIcon>
          <LockOutlined />
        </ListItemIcon>
        <ListItemText primary={t('Privacy Center')} />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
        <ListItemIcon>
          <CommentOutlined />
        </ListItemIcon>
        <ListItemText primary={t('Feedback')} />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
        <ListItemIcon>
          <UnorderedListOutlined />
        </ListItemIcon>
        <ListItemText primary={t('History')} />
      </ListItemButton>
    </List>
  );
};

export default SettingTab;
