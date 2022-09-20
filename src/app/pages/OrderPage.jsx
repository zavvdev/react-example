import { Layouts } from "app/layouts";
import { Order } from "order/gateway/output";

export function OrderPage() {
  return (
    <Layouts.MainLayout>
      <Order />
    </Layouts.MainLayout>
  );
}
