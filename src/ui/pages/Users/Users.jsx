import { useGetUsersQuery } from "core/api/user/queries/useGetUsersQuery";
import { Typography } from "ui/components/Typography/Typography";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";

export function Users() {
  const { data: usersQueryData } = useGetUsersQuery();

  return (
    <MainLayout>
      <Typography>
        {JSON.stringify(usersQueryData) || "Empty"}
      </Typography>
    </MainLayout>
  );
}
