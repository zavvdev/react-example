import { listenerMiddleware } from "app/store/listenerMiddleware";
import { cartActions, cartSelectors } from "order/gateway/input";

export function addSuccessOrderMiddleware(successOrderPredicate) {
  listenerMiddleware.startListening({
    predicate: successOrderPredicate,
    effect: (_, listenerApi) => {
      const cartBooks = cartSelectors.selectCartBooks(listenerApi.getState());
      if (cartBooks.length > 0) {
        listenerApi.dispatch(cartActions.clearBooksCart());
      }
    },
  });
}
