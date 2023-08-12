import PropTypes from 'prop-types';
import React, { useMemo, useState /*, useEffect */ } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { presetPalettes } from '@ant-design/colors';
import ThemeOption from './theme';
//import useMediaQuery from '@mui/material/useMediaQuery';

// project import
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //
export const ThemeContext = React.createContext();
export default function ThemeCustomization({ children }) {
  const theme = Palette('light', 'default');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Public Sans', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);
  const colors = presetPalettes;
  const paletteColor = ThemeOption(colors);
  //const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const getTheme = (mode) => ({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1536
      }
    },
    direction: 'ltr',
    mixins: {
      toolbar: {
        minHeight: 60,
        paddingTop: 8,
        paddingBottom: 8
      }
    },
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            common: {
              black: '#000',
              white: '#fff'
            },
            text: {
              primary: paletteColor.grey[100],
              secondary: paletteColor.grey[400],
              disabled: paletteColor.grey[100]
            },
            action: {
              disabled: paletteColor.grey[300]
            },
            divider: paletteColor.grey[800],
            background: {
              paper: paletteColor.grey[700],
              default: paletteColor.grey[800]
            }
          }
        : theme.palette)
    },
    customShadows: themeCustomShadows,
    typography: themeTypography
  });
  // const newtheme = useMemo(() => createTheme(getTheme(mode)), [mode]);
  const newtheme = createTheme(getTheme(mode));
  newtheme.components = componentsOverride(newtheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider theme={newtheme} /*theme={prefersDarkMode ? darkTheme : themes}*/>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node
};
