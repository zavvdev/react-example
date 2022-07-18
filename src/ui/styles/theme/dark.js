import { appPalette } from "ui/styles/theme/palette";

export const appDarkTheme = {
  palette: appPalette,
  backgroundColor: appPalette.black.main,
  typographyColor: appPalette.white.dim,
  borderColor: appPalette.gray.dark,

  components: {
    ThemeSwitch: {
      trackBackgroundColor: appPalette.white.main,
    },
  },
};
