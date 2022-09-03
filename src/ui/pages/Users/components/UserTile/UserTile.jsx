import cx from "clsx";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useUserTileStyles } from "ui/pages/Users/components/UserTile/UserTile.styles";
import { Typography } from "ui/components/Typography/Typography";
import { NAMESPACES } from "ui/i18n/config";

export function UserTile({
  name, email, company, role, onDelete, isDeleting,
}) {
  const { t } = useTranslation(NAMESPACES.users);
  const classes = useUserTileStyles();

  const deleteBtnClasses = cx(classes.deleteBtn, {
    [classes.deleteBtnDeleting]: isDeleting,
  });

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
      <button
        type="button"
        className={deleteBtnClasses}
        onClick={onDelete}
        disabled={isDeleting}
      >
        {isDeleting ? t("userTile.deleting") : t("userTile.delete")}
      </button>
    </div>
  );
}

UserTile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  isDeleting: PropTypes.bool,
};

UserTile.defaultProps = {
  isDeleting: false,
};
