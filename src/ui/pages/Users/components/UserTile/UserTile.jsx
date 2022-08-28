import PropTypes from "prop-types";
import { useUserTileStyles } from "ui/pages/Users/components/UserTile/UserTile.styles";
import { Typography } from "ui/components/Typography/Typography";

export function UserTile({
  name, email, company, role,
}) {
  const classes = useUserTileStyles();

  return (
    <div className={classes.root}>
      <Typography tag="h3" className={classes.name}>
        {name}
      </Typography>
      <Typography tag="i">
        {email}
      </Typography>
      <Typography tag="div" className={classes.company}>
        {`${company}, ${role}`}
      </Typography>
    </div>
  );
}

UserTile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
