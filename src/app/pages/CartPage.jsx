import { MainLayout } from "app/layouts/MainLayout/MainLayout";
import { CartView } from "cart/gateway/output";

export function CartPage() {
  return (
    <MainLayout>
      <CartView />
    </MainLayout>
  );
}
