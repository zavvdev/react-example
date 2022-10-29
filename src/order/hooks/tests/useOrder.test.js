import { act, renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { useSelector } from "react-redux";
import { CART_REDUCER_NAME } from "cart/store/config";
import { useOrder } from "order/hooks/useOrder";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";
import { cartSelectors } from "cart/store/selectors";
import { apiServerMock } from "__tests__/mocks/apiServerMock";
import { testUtils } from "__tests__/utils";

const booksMock = [
  {
    id: 1,
    title: "Mock",
  },
];

const wrapper = testUtils.createWrapper({
  initialStoreState: {
    [CART_REDUCER_NAME]: {
      books: booksMock,
    },
  },
});

test("should return correct isCartEmpty status", () => {
  const { result } = renderHook(() => useOrder(), {
    wrapper,
  });
  expect(result.current.isCartEmpty).toBe(false);
});

test("should return book titles", () => {
  const { result } = renderHook(() => useOrder(), {
    wrapper,
  });
  expect(result.current.bookTitlesToOrder).toEqual(
    booksMock.map((book) => book.title),
  );
});

test("should perform submit flow", async () => {
  apiServerMock.use(
    rest.post(
      testUtils.buildHttpApiRoute(ORDER_HTTP_API_ENDPOINTS.postOrder()),
      async (request, response, context) => {
        const data = await request.json();
        return response(context.json(data));
      },
    ),
  );
  const { result } = renderHook(() => useOrder(), {
    wrapper,
  });
  const email = "mock@mock.com";
  act(() => {
    result.current.onSubmit({ email });
  });
  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
  const { result: cartBooks } = renderHook(
    () => useSelector(cartSelectors.selectCartBooks),
    {
      wrapper,
    },
  );
  expect(cartBooks.current).toEqual([]);
});
