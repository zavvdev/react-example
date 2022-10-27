import { rest } from "msw";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useSelector } from "react-redux";
import { BOOKS_HTTP_API_ENDPOINTS } from "books/store/config";
import { useBooks } from "books/hooks/useBooks";
import {
  buildCartStoreState,
  CART_STORE_DOMAIN,
  cartSelectors,
} from "books/gateway/input";
import { getAllBooksResponseAdapter } from "books/store/api";
import { testUtils } from "__tests__/utils";
import { apiServerMock } from "__tests__/mocks/apiServerMock";

const getAllBooksApiResponse = [
  {
    id: 42,
    title: "Mock",
    author_fullname: "Mock Mock",
    publish_date: "Aug 12, 2042",
    price: "$42",
    cover_url: "http://mock.com/images/42.jpg",
  },
];

beforeEach(() => {
  apiServerMock.use(
    rest.get(
      testUtils.buildHttpApiRoute(BOOKS_HTTP_API_ENDPOINTS.getAllBooks()),
      (_, response, context) => {
        return response(context.json(getAllBooksApiResponse));
      },
    ),
  );
});

describe("useBooks", () => {
  test("should return books data", async () => {
    const { result } = renderHook(() => useBooks(), {
      wrapper: testUtils.createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isError).toBe(false);

    await waitFor(() =>
      expect(result.current.data).toEqual(
        getAllBooksResponseAdapter(getAllBooksApiResponse),
      ),
    );

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  test("should add book to cart", async () => {
    const wrapper = testUtils.createWrapper({
      initialStoreState: {
        [CART_STORE_DOMAIN]: buildCartStoreState({ books: [] }),
      },
    });
    const { result } = renderHook(() => useBooks(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    const book = result.current.data[0];

    expect(result.current.getIsBookInCart(book.id)).toBe(false);

    act(() => {
      result.current.onAddToCart(book);
    });
    const { result: selectCartBooksResult } = renderHook(
      () => useSelector(cartSelectors.selectCartBooks),
      {
        wrapper,
      },
    );

    expect(selectCartBooksResult.current).toEqual([book]);
    expect(result.current.getIsBookInCart(book.id)).toBe(true);
  });

  test("should remove book from cart", async () => {
    const wrapper = testUtils.createWrapper({
      initialStoreState: {
        [CART_STORE_DOMAIN]: buildCartStoreState({ books: [] }),
      },
    });
    const { result } = renderHook(() => useBooks(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    const book = result.current.data[0];

    act(() => {
      result.current.onAddToCart(book);
    });
    const { result: selectCartBooksResult } = renderHook(
      () => useSelector(cartSelectors.selectCartBooks),
      {
        wrapper,
      },
    );

    expect(selectCartBooksResult.current).toEqual([book]);

    act(() => {
      result.current.onRemoveFromCart(book.id);
    });

    expect(selectCartBooksResult.current).toEqual([]);
    expect(result.current.getIsBookInCart(book.id)).toBe(false);
  });
});
