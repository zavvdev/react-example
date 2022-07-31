import { useGetUsersQuery } from "core/api/entities/User/useGetUsersQuery";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";

export function Users() {
  const { data: usersQueryData } = useGetUsersQuery();

  return (
    <MainLayout>
      <div>
        {JSON.stringify(usersQueryData)}
      </div>
    </MainLayout>
  );
}
