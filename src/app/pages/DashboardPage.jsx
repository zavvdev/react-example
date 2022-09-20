import { Layouts } from "app/layouts";
import { Dashboard } from "dashboard/gateway/output";

export function DashboardPage() {
  return (
    <Layouts.MainLayout>
      <Dashboard />
    </Layouts.MainLayout>
  );
}
