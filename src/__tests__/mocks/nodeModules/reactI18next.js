const mockI18nChangeLanguage = jest.fn((lang) => lang);

jest.mock("react-i18next", () => {
  const originalModule = jest.requireActual("react-i18next");
  return {
    ...originalModule,
    withTranslation: () => (Component) => {
      // eslint-disable-next-line no-param-reassign
      Component.defaultProps = {
        ...Component.defaultProps,
        t: (key) => key,
        i18n: {
          language: "en",
          changeLanguage: mockI18nChangeLanguage,
        },
      };
      return Component;
    },
    useTranslation: () => {
      return {
        t: (key) => key,
        i18n: {
          language: "en",
          changeLanguage: mockI18nChangeLanguage,
        },
      };
    },
  };
});
