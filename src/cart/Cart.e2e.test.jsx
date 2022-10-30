import { fireEvent, renderHook, screen } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { GENERAL_ROUTES } from "app/router/config";
import { Cart } from "cart/Cart";
import { CART_REDUCER_NAME } from "cart/store/config";
import { testUtils } from "__tests__/utils";

const booksMock = [
  {
    id: 42,
    title: "Mock",
    author: "Mock Mock",
    date: "Aug 24, 2042",
    price: "$42",
    cover: "http://mock.com/42.jpg",
  },
];

test("should display empty cart", () => {
  testUtils.render(<Cart />, {
    initialStoreState: {
      [CART_REDUCER_NAME]: {
        books: [],
      },
    },
  });
  expect(screen.getByText("empty")).toBeInTheDocument();
});

test("should go to books page", () => {
  testUtils.render(<Cart />, {
    initialStoreState: {
      [CART_REDUCER_NAME]: {
        books: [],
      },
    },
  });
  const booksPageLink = screen.getByText("addBooks");
  fireEvent.click(booksPageLink);
  const { result: location } = renderHook(() => useLocation(), {
    wrapper: testUtils.createWrapper(),
  });
  expect(location.current.pathname).toBe(GENERAL_ROUTES.books);
});

test("should display books to order", () => {
  testUtils.render(<Cart />, {
    initialStoreState: {
      [CART_REDUCER_NAME]: {
        books: booksMock,
      },
    },
  });
  expect(screen.getByText(booksMock[0].title)).toBeInTheDocument();
  expect(screen.getByText(booksMock[0].price)).toBeInTheDocument();
});

test("should remove book from cart", () => {
  testUtils.render(<Cart />, {
    initialStoreState: {
      [CART_REDUCER_NAME]: {
        books: booksMock,
      },
    },
  });
  const removeBookButton = screen.getByText("cartBook.remove");
  fireEvent.click(removeBookButton);
  expect(screen.queryByText(booksMock[0].title)).not.toBeInTheDocument();
});

test("should go to order page", () => {
  testUtils.render(<Cart />, {
    initialStoreState: {
      [CART_REDUCER_NAME]: {
        books: booksMock,
      },
    },
  });
  const orderButton = screen.getByText("order");
  fireEvent.click(orderButton);
  const { result: location } = renderHook(() => useLocation(), {
    wrapper: testUtils.createWrapper(),
  });
  expect(location.current.pathname).toBe(GENERAL_ROUTES.order);
});
