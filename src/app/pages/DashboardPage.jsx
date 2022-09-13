import { MainLayout } from "app/layouts/MainLayout/MainLayout";
import { DashboardView } from "dashboard/gateway";

export function DashboardPage() {
  return (
    <MainLayout>
      <DashboardView />
    </MainLayout>
  );
}
