import { Layouts } from "app/layouts";
import { DashboardView } from "dashboard/gateway/output";

export function DashboardPage() {
  return (
    <Layouts.MainLayout>
      <DashboardView />
    </Layouts.MainLayout>
  );
}
