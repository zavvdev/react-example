import { Layouts } from "app/layouts";
import { CartView } from "cart/gateway/output";

export function CartPage() {
  return (
    <Layouts.MainLayout>
      <CartView />
    </Layouts.MainLayout>
  );
}
