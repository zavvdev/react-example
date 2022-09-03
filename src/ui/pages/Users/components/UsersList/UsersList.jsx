import { useTranslation } from "react-i18next";
import { useGetAllUsersQuery } from "core/store/api/users/api";
import { NAMESPACES } from "ui/i18n/config";
import { useUsersListStyles } from "ui/pages/Users/components/UsersList/UsersList.styles";
import { Typography } from "ui/components/Typography/Typography";
import { UserTile } from "ui/pages/Users/components/UserTile/UserTile";

export function UsersList() {
  const classes = useUsersListStyles();
  const { t } = useTranslation(NAMESPACES.common);

  const { data: usersData, isLoading, isError } = useGetAllUsersQuery();

  return (
    <div>
      {isError && (
        <Typography className={classes.error}>
          {t("errors.unexpected")}
        </Typography>
      )}
      {!isError && isLoading && (
        <Typography>
          {t("labels.loading")}
        </Typography>
      )}
      {!isError && !isLoading && usersData?.length > 0 && (
        <div className={classes.list}>
          {usersData.map((user) => (
            <UserTile
              key={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              role={user.role}
            />
          ))}
        </div>
      )}
    </div>
  );
}
