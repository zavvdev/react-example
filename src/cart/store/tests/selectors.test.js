import { CART_REDUCER_NAME } from "cart/store/config";
import { cartSelectors } from "cart/store/selectors";

const stateMock = {
  [CART_REDUCER_NAME]: {
    books: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  },
};

test("should select cart books length", () => {
  const result = cartSelectors.selectCartBooksLength(stateMock);
  expect(result).toBe(stateMock[CART_REDUCER_NAME].books.length);
});

test("should select cart books", () => {
  const result = cartSelectors.selectCartBooks(stateMock);
  expect(result).toBe(stateMock[CART_REDUCER_NAME].books);
});
