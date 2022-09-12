import { appPalette } from "app/styles/theme/palette";

export const appLightTheme = {
  palette: appPalette,
  backgroundColor: appPalette.white.main,
  typographyColor: appPalette.black.main,
  borderColor: appPalette.gray.light,

  components: {
    ThemeSwitch: {
      trackBackgroundColor: appPalette.gray.light,
    },
  },
};
