import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userApiActions } from "core/store/api/user/actions";
import { selectAllUsers, selectIsAllUsersLoading } from "core/store/api/user/selectors";
import { Typography } from "ui/components/Typography/Typography";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";

export function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const isUsersLoading = useSelector(selectIsAllUsersLoading);

  useEffect(() => {
    dispatch(userApiActions.getAll.request());
  }, [dispatch]);

  return (
    <MainLayout>
      <Typography>
        {isUsersLoading ? "Loading.. " : JSON.stringify(users) || "Empty"}
      </Typography>
    </MainLayout>
  );
}
