import { MainLayout } from "app/layouts/MainLayout/MainLayout";
import { OrderView } from "order/gateway/output";

export function OrderPage() {
  return (
    <MainLayout>
      <OrderView />
    </MainLayout>
  );
}
