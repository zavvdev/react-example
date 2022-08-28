import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUsersApiGetAllData, selectUsersApiGetAllIsError, selectUsersApiGetAllIsLoading } from "core/store/api/users/selectors";
import { usersApiActions } from "core/store/api/users/actions";
import { NAMESPACES } from "ui/i18n/config";
import { useUsersListStyles } from "ui/pages/Users/components/UsersList/UsersList.styles";
import { Typography } from "ui/components/Typography/Typography";
import { UserTile } from "ui/pages/Users/components/UserTile/UserTile";

export function UsersList() {
  const dispatch = useDispatch();
  const classes = useUsersListStyles();
  const { t } = useTranslation(NAMESPACES.common);

  const users = useSelector(selectUsersApiGetAllData);
  const isLoading = useSelector(selectUsersApiGetAllIsLoading);
  const isError = useSelector(selectUsersApiGetAllIsError);

  useEffect(() => {
    dispatch(usersApiActions.getAll());
  }, [dispatch]);

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
      {!isError && !isLoading && users?.length > 0 && (
        <div className={classes.list}>
          {users.map((user) => (
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
