import { MainLayout } from "app/layouts/MainLayout/MainLayout";
import { DashboardView } from "dashboard/gateway/output";

export function DashboardPage() {
  return (
    <MainLayout>
      <DashboardView />
    </MainLayout>
  );
}
