import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { Books } from "books/Books";
import { BOOKS_HTTP_API_ENDPOINTS } from "books/store/config";
import { apiServerMock } from "__tests__/mocks/apiServerMock";
import { testUtils } from "__tests__/utils";

const getAllBooksApiResponse = [
  {
    id: 42,
    title: "Mock",
    author_fullname: "Mock Mock",
    publish_date: "Aug 12, 2042",
    price: "$42",
    cover_url: "http://mock.com/images/42.jpg",
  },
  {
    id: 43,
    title: "Mock2",
    author_fullname: "Mock2 Mock2",
    publish_date: "Aug 13, 2042",
    price: "$43",
    cover_url: "http://mock.com/images/43.jpg",
  },
];

test("should display loading message", () => {
  testUtils.render(<Books />);
  expect(screen.getByText("labels.loading")).toBeInTheDocument();
});

test("should display error message", async () => {
  apiServerMock.use(
    rest.get(
      testUtils.buildHttpApiRoute(BOOKS_HTTP_API_ENDPOINTS.getAllBooks()),
      (_, response, context) => {
        return response(
          context.status(500),
          context.json({
            errorMessage: "Server error",
          }),
        );
      },
    ),
  );
  testUtils.render(<Books />);
  await waitFor(() => {
    expect(screen.getByText("errors.unexpected")).toBeInTheDocument();
  });
});

test("should display fetched books", async () => {
  apiServerMock.use(
    rest.get(
      testUtils.buildHttpApiRoute(BOOKS_HTTP_API_ENDPOINTS.getAllBooks()),
      (_, response, context) => {
        return response(context.json(getAllBooksApiResponse));
      },
    ),
  );
  testUtils.render(<Books />);
  await waitFor(() => {
    const book1 = getAllBooksApiResponse[0];
    const book2 = getAllBooksApiResponse[1];
    expect(screen.getByText(book1.title)).toBeInTheDocument();
    expect(screen.getByText(book1.price)).toBeInTheDocument();
    expect(screen.getByText(book2.title)).toBeInTheDocument();
    expect(screen.getByText(book2.price)).toBeInTheDocument();
  });
});

test("should add book to cart & remove", async () => {
  apiServerMock.use(
    rest.get(
      testUtils.buildHttpApiRoute(BOOKS_HTTP_API_ENDPOINTS.getAllBooks()),
      (_, response, context) => {
        return response(context.json(getAllBooksApiResponse));
      },
    ),
  );
  testUtils.render(<Books />);
  await waitFor(() => {
    const book1 = getAllBooksApiResponse[0];
    expect(screen.getByText(book1.title)).toBeInTheDocument();
  });
  const addToCartButton = screen.queryAllByText("bookItem.addToCart")[0];
  act(() => {
    fireEvent.click(addToCartButton);
  });
  const removeFromCartButton = screen.getByText("bookItem.alreadyInCart");
  expect(removeFromCartButton).toBeInTheDocument();
  act(() => {
    fireEvent.click(removeFromCartButton);
  });
  expect(screen.queryByText("bookItem.alreadyInCart")).not.toBeInTheDocument();
});
