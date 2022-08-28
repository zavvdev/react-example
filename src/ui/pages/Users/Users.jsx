import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersApiActions } from "core/store/api/users/actions";
import { selectUsersApiGetAllData, selectUsersApiGetAllIsLoading } from "core/store/api/users/selectors";
import { Typography } from "ui/components/Typography/Typography";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";

export function Users() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectUsersApiGetAllIsLoading);
  const data = useSelector(selectUsersApiGetAllData);

  useEffect(() => {
    dispatch(usersApiActions.getAll());
  }, [dispatch]);

  return (
    <MainLayout>
      <Typography>
        {isLoading
          ? "Loading.."
          : (JSON.stringify(data) || "Empty")}
      </Typography>
    </MainLayout>
  );
}
