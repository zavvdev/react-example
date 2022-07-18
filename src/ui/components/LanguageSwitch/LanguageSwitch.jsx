import cx from "clsx";
import PropTypes from "prop-types";
import { useLanguageSwitchStyles } from "ui/components/LanguageSwitch/LanguageSwitch.styles";

export function LanguageSwitch({
  onLanguageSwitch,
  languages,
  currentLanguage,
  className,
}) {
  const classes = useLanguageSwitchStyles();

  const rootClasses = cx(classes.root, className);

  return (
    <div className={rootClasses}>
      {languages.map((lang, index) => (
        <div className={classes.langWrap} key={lang}>
          <button
            type="button"
            onClick={() => onLanguageSwitch(lang)}
            className={cx(classes.lang, {
              [classes.active]: currentLanguage === lang,
            })}
          >
            {lang}
          </button>
          {index === 0 ? <span>|</span> : null}
        </div>
      ))}
    </div>
  );
}

LanguageSwitch.propTypes = {
  onLanguageSwitch: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLanguage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

LanguageSwitch.defaultProps = {
  className: undefined,
};
