import { Layouts } from "app/layouts";
import { OrderView } from "order/gateway/output";

export function OrderPage() {
  return (
    <Layouts.MainLayout>
      <OrderView />
    </Layouts.MainLayout>
  );
}
