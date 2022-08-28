import { MainLayout } from "ui/layouts/MainLayout/MainLayout";
import { UsersList } from "ui/pages/Users/components/UsersList/UsersList";
import { AddUserForm } from "ui/pages/Users/components/AddUserForm/AddUserForm";

export function Users() {
  return (
    <MainLayout>
      <AddUserForm />
      <UsersList />
    </MainLayout>
  );
}
