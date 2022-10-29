import { cartActions, cartStoreSetup } from "cart/store/slice";

test("should add book to cart", () => {
  const book = { id: 1 };
  const initialState = { books: [] };
  const expectedState = {
    books: [book],
  };
  expect(
    cartStoreSetup.reducer(
      initialState,
      cartActions.addBookToCart({
        book,
      }),
    ),
  ).toEqual(expectedState);
});

test("should remove book from cart", () => {
  const initialState = {
    books: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  };
  const expectedState = {
    books: [initialState.books[0]],
  };
  expect(
    cartStoreSetup.reducer(
      initialState,
      cartActions.removeBookFromCart({
        bookId: initialState.books[1].id,
      }),
    ),
  ).toEqual(expectedState);
});

test("should remove all books from cart", () => {
  const initialState = {
    books: [
      {
        id: 1,
      },
    ],
  };
  const expectedState = {
    books: [],
  };
  expect(
    cartStoreSetup.reducer(initialState, cartActions.clearBooksCart()),
  ).toEqual(expectedState);
});
