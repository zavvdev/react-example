import { MoonIcon } from "ui/components/svgIcons/MoonIcon";
// import { SunIcon } from "components/svgIcons/SunIcon";
import { useThemeSwitchStyles } from "ui/components/ThemeSwitch/ThemeSwitch.styles";

function ThemeSwitch() {
  const classes = useThemeSwitchStyles();

  return (
    <button type="button" className={classes.root}>
      <div className={classes.switcher}>
        <MoonIcon />
      </div>
      {/* <div>
        <SunIcon />
      </div>
      <div>
        <MoonIcon />
      </div> */}
    </button>
  );
}

export { ThemeSwitch };
