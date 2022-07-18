import { LogoIcon } from "ui/components/svgIcons/LogoIcon";
import { useHeaderStyles } from "ui/layouts/components/Header/Header.styles";
import { Actions } from "ui/layouts/components/Header/components/Actions/Actions";

export function Header() {
  const classes = useHeaderStyles();

  return (
    <div className={classes.root}>
      <div>
        <LogoIcon className={classes.logo} />
      </div>
      <Actions />
    </div>
  );
}
