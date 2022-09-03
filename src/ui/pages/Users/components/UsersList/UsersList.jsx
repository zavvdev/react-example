import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useDeleteOneUserByIdMutation, useGetAllUsersQuery } from "core/store/api/users";
import { NAMESPACES } from "ui/i18n/config";
import { useUsersListStyles } from "ui/pages/Users/components/UsersList/UsersList.styles";
import { Typography } from "ui/components/Typography/Typography";
import { UserTile } from "ui/pages/Users/components/UserTile/UserTile";

export function UsersList() {
  const classes = useUsersListStyles();
  const { t } = useTranslation([NAMESPACES.users, NAMESPACES.common]);

  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const { data: usersData, isLoading, isError } = useGetAllUsersQuery();
  const [
    deleteUser,
    { isLoading: isDeleting, isSuccess: isDeleted, isError: isDeleteError },
  ] = useDeleteOneUserByIdMutation();

  const handleDelete = (userId) => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    if (confirm(t("userTile.deleteConfirm"))) {
      setUserIdToDelete(userId);
      deleteUser({ userId });
    }
  };

  useEffect(() => {
    if (isDeleted) {
      setUserIdToDelete(null);
    }
  }, [isDeleted]);

  useEffect(() => {
    if (isDeleteError) {
      // eslint-disable-next-line no-alert
      alert(t(`${NAMESPACES.common}:errors.unexpected`));
      setUserIdToDelete(null);
    }
  }, [isDeleteError, t]);

  return (
    <div>
      {isError && (
        <Typography className={classes.error}>
          {t(`${NAMESPACES.common}:errors.unexpected`)}
        </Typography>
      )}
      {!isError && isLoading && (
        <Typography>
          {t(`${NAMESPACES.common}:labels.loading`)}
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
              onDelete={() => handleDelete(user.id)}
              isDeleting={isDeleting && userIdToDelete === user.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
