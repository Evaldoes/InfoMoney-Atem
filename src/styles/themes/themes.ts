import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0061A8',
      light: '#0090C7',
      dark: '#01284C',
    },
    secondary: {
      main: '#3385c8',
      dark: '#3F7EC1',
    },
    warning: {
      main: '#FF9B06',
      light: '#FCCB7C',
    },
    success: {
      main: '#00B955',
      light: '#9DCFAA',
      dark: '#54bd49',
    },

    // Primary color
    color_atem_primary: {
      main: '#0061A8',
      light: '#0090C7',
      dark: '#0462A9',
    },
    color_atem_secondary: {
      main: '#393939',
      light: '#757479',
      dark: '#393939',
    },

    // Secondary color
    color_atem_danger: {
      main: '#FA514D',
      light: '#F5AAAA',
      dark: '#E5252D',
    },
    color_atem_normal: {
      main: '#068BFF',
      light: '#AFD8F3',
      dark: '#0462A9',
    },
    color_atem_success: {
      main: '#00B955',
      light: '#9DCFAA',
      dark: '#56AF31',
    },
    color_atem_warning: {
      main: '#FF9B06',
      light: '#FCCB7C',
      dark: '#FF9B06',
    },
    color_atem_red: {
      main: '#ff3931',
      light: '#ff0000',
      dark: '#E5252D',
    },
    color_atem_orange: {
      main: '#ff9635',
      dark: '#F4991B',
    },
    color_atem_yellow: {
      main: '#ffb83c',
      dark: '#FBBD0C',
    },
    color_atem_olive: {
      main: '#a9d14a',
      dark: '#B0C617',
    },
    color_atem_green: {
      main: '#54bd49',
      dark: '#56AF31',
    },
    color_atem_disabled: {
      main: '#d7dfdf',
      dark: '#B1B0B0',
      text: '#595b61',
    },

    // Grey scales
    color_atem_black: {
      main: '#000000',
    },
    color_atem_grey_95: {
      main: '#393939',
    },
    color_atem_grey_90: {
      main: '#454545',
    },
    color_neutral_atem_grey_80: {
      main: '#888989',
    },
    color_atem_grey_70: {
      main: '#777777',
    },
    color_neutral_atem_grey_60: {
      main: '#f0efef',
    },
    color_atem_grey_50: {
      main: '#888888',
    },
    color_atem_grey_40: {
      main: '#BBBBBB',
    },
    color_atem_grey_30: {
      main: '#DDDDDD',
    },
    color_atem_grey_20: {
      main: '#EEEEEE',
    },

    // Complementary colors
    color_atem_text: {
      main: '#01284C',
    },
    color_atem_pattern: {
      main: '#F9FBFF',
    },
    color_atem_alert: {
      main: '#FFDD00',
    },
    color_atem_white: {
      main: '#FFF',
    },

    // Alert colors
    color_atem_danger_alert: {
      main: '#fdb4b6',
    },
    color_atem_info_alert: {
      main: '#abe1f5',
    },
    color_atem_success_alert: {
      main: '#9edcbb',
    },
    color_atem_warning_alert: {
      main: '#fdcf94',
    },
    color_atem_error_alert: {
      main: '#ff4e5a',
    },
    color_atem_impediment_alert: {
      main: '#24292b',
    },

    // background atem
    background_atem_color: {
      main: 'rgba(249, 251, 255, 0.89)',
    },
  },
  typography: {
    fontFamily: ['Roboto'].join(','),
  },
});

export default theme;
