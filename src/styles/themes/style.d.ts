/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-shadow */
import 'styled-components';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    color_atem_primary: Palette['color_atem_primary'];
    color_atem_secondary: Palette['atem_secondary'];
    color_atem_danger: Palette['atem_danger'];
    color_atem_normal: Palette['atem_normal'];
    color_atem_success: Palette['atem_success'];
    color_atem_warning: Palette['atem_warning'];
    color_atem_red: Palette['atem_red'];
    color_atem_orange: Palette['atem_orange'];
    color_atem_yellow: Palette['atem_yellow'];
    color_atem_olive: Palette['atem_olive'];
    color_atem_green: Palette['atem_green'];
    color_atem_disabled: Palette['atem_disabled'];
    color_atem_black: Palette['atem_black'];
    color_atem_grey_95: Palette['atem_grey_95'];
    color_atem_grey_90: Palette['atem_grey_90'];
    color_neutral_atem_grey_80: Palette['atem_grey_80'];
    color_atem_grey_70: Palette['atem_grey_70'];
    color_neutral_atem_grey_60: Palette['atem_grey_60'];
    color_atem_grey_50: Palette['atem_grey_50'];
    color_atem_grey_40: Palette['atem_grey_40'];
    color_atem_grey_30: Palette['atem_grey_30'];
    color_atem_grey_20: Palette['atem_grey_20'];
    color_atem_text: Palette['atem_coltext'];
    color_atem_pattern: Palette['atem_colpattern'];
    color_atem_alert: Palette['atem_alert'];
    color_atem_white: Palette['atem_white'];
    color_atem_danger_alert: Palette['atem_danger_alert'];
    color_atem_info_alert: Palette['atem_info_alert'];
    color_atem_warning_alert: Palette['atem_warning_alert'];
    color_atem_success_alert: Palette['atem_success_alert'];
    color_atem_error_alert: Palette['atem_error_alert'];
    color_atem_impediment_alert: Palette['atem_impediment_alert'];
    background_atem_color: Palette['atem_colbackground'];
  }

  interface PaletteOptions {
    color_atem_primary?: PaletteOptions['color_atem_primary'];
    color_atem_secondary?: PaletteOptions['atem_secondary'];
    color_atem_danger?: PaletteOptions['atem_danger'];
    color_atem_normal?: PaletteOptions['atem_normal'];
    color_atem_success?: PaletteOptions['atem_atem_success'];
    color_atem_warning?: PaletteOptions['atem_warning'];
    color_atem_red?: PaletteOptions['atem_red'];
    color_atem_orange?: PaletteOptions['atem_orange'];
    color_atem_yellow?: PaletteOptions['atem_yellow'];
    color_atem_olive?: PaletteOptions['atem_olive'];
    color_atem_green?: PaletteOptions['atem_green'];
    color_atem_disabled?: PaletteOptions['atem_disabled'];
    color_atem_black?: PaletteOptions['atem_black'];
    color_atem_grey_95?: PaletteOptions['atem_grey_95'];
    color_atem_grey_90?: PaletteOptions['atem_grey_90'];
    color_neutral_atem_grey_80?: PaletteOptions['atem_grey_80'];
    color_atem_grey_70?: PaletteOptions['atem_grey_70'];
    color_neutral_atem_grey_60?: PaletteOptions['atem_grey_60'];
    color_atem_grey_50?: PaletteOptions['atem_grey_50'];
    color_atem_grey_40?: PaletteOptions['atem_grey_40'];
    color_atem_grey_30?: PaletteOptions['atem_grey_30'];
    color_atem_grey_20?: PaletteOptions['atem_grey_20'];
    color_atem_text?: PaletteOptions['atem_coltext'];
    color_atem_pattern?: PaletteOptions['atem_colpattern'];
    color_atem_alert?: PaletteOptions['atem_alert'];
    color_atem_white?: PaletteOptions['atem_white'];
    color_atem_danger_alert?: PaletteOptions['atem_danger_alert'];
    color_atem_info_alert?: PaletteOptions['atem_info_alert'];
    color_atem_warning_alert?: PaletteOptions['atem_warning_alert'];
    color_atem_success_alert?: PaletteOptions['atem_success_alert'];
    color_atem_error_alert?: PaletteOptions['atem_error_alert'];
    color_atem_impediment_alert?: PaletteOptions['atem_impediment_alert'];
    background_atem_color?: PaletteOptions['atem_colbackground'];
  }
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    color_atem_primary: true;
    color_atem_secondary: true;
    color_atem_danger: true;
    color_atem_normal: true;
    color_atem_success: true;
    color_atem_warning: true;
    color_atem_red: true;
    color_atem_orange: true;
    color_atem_yellow: true;
    color_atem_olive: true;
    color_atem_green: true;
    color_atem_disabled: true;
    color_atem_black: true;
    color_atem_grey_95: true;
    color_atem_grey_90: true;
    color_neutral_atem_grey_80: true;
    color_atem_grey_70: true;
    color_neutral_atem_grey_60: true;
    color_atem_grey_50: true;
    color_atem_grey_40: true;
    color_atem_grey_30: true;
    color_atem_grey_20: true;
    color_atem_text: true;
    color_atem_pattern: true;
    color_atem_alert: true;
    color_atem_white: true;
    color_atem_danger_alert: true;
    color_atem_info_alert: true;
    color_atem_warning_alert: true;
    color_atem_success_alert: true;
    color_atem_error_alert: true;
    color_atem_impediment_alert: true;
    background_atem_color: true;
  }

  interface CheckboxPropsColorOverrides {
    color_atem_primary: true;
  }

  interface AlertPropsColorOverrides {
    color_atem_danger_alert: true;
    color_atem_info_alert: true;
    color_atem_success_alert: true;
    color_atem_warning_alert: true;
    color_atem_error_alert: true;
    color_atem_impediment_alert: true;
  }

  interface RadioPropsColorOverrides {
    color_atem_primary: true;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
