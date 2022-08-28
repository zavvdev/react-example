import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { usersApiActions } from "core/store/api/users/actions";
import { selectUsersApiGetAllData, selectUsersApiGetAllIsError, selectUsersApiGetAllIsLoading } from "core/store/api/users/selectors";
import { Typography } from "ui/components/Typography/Typography";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";
import { UserTile } from "ui/pages/Users/components/UserTile/UserTile";
import { useUsersStyles } from "ui/pages/Users/Users.styles";
import { NAMESPACES } from "ui/i18n/config";

export function Users() {
  const dispatch = useDispatch();
  const classes = useUsersStyles();
  const { t } = useTranslation(NAMESPACES.common);

  const users = useSelector(selectUsersApiGetAllData);
  const isLoading = useSelector(selectUsersApiGetAllIsLoading);
  const isError = useSelector(selectUsersApiGetAllIsError);

  useEffect(() => {
    dispatch(usersApiActions.getAll());
  }, [dispatch]);

  return (
    <MainLayout>
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
        <div className={classes.usersList}>
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
    </MainLayout>
  );
}
