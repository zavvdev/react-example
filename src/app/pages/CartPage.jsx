import { Layouts } from "app/layouts";
import { Cart } from "cart/gateway/output";

export function CartPage() {
  return (
    <Layouts.Main>
      <Cart />
    </Layouts.Main>
  );
}
