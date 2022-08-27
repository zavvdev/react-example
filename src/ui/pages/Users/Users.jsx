import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userApiActions } from "core/store/api/user/actions";
import { selectUserApiGetAllData, selectUserApiGetAllIsLoading } from "core/store/api/user/selectors";
import { Typography } from "ui/components/Typography/Typography";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";

export function Users() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectUserApiGetAllIsLoading);
  const data = useSelector(selectUserApiGetAllData);

  useEffect(() => {
    dispatch(userApiActions.getAll());
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
