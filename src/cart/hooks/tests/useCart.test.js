import { renderHook } from "@testing-library/react";
import { useSelector } from "react-redux";
import { act } from "react-dom/test-utils";
import { useCart } from "cart/hooks/useCart";
import { CART_REDUCER_NAME } from "cart/store/config";
import { cartSelectors } from "cart/store/selectors";
import { testUtils } from "__tests__/utils";

const booksMock = [
  {
    id: 24,
    name: "mock",
  },
  {
    id: 42,
    name: "mock2",
  },
];

test("should return cart books and be not empty", () => {
  const { result } = renderHook(() => useCart(), {
    wrapper: testUtils.createWrapper({
      initialStoreState: {
        [CART_REDUCER_NAME]: {
          books: booksMock,
        },
      },
    }),
  });
  expect(result.current.books).toEqual(booksMock);
  expect(result.current.isEmpty).toBe(false);
});

test("should remove book from cart by id", () => {
  const wrapper = testUtils.createWrapper({
    initialStoreState: {
      [CART_REDUCER_NAME]: {
        books: booksMock,
      },
    },
  });
  const { result } = renderHook(() => useCart(), {
    wrapper,
  });
  act(() => {
    result.current.onRemoveBookFromCart(booksMock[0].id);
  });
  const { result: selectCartBooksResult } = renderHook(
    () => useSelector(cartSelectors.selectCartBooks),
    {
      wrapper,
    },
  );
  expect(selectCartBooksResult.current).toEqual([booksMock[1]]);
});
