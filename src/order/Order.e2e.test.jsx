import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { Order } from "order/Order";
import { CART_REDUCER_NAME } from "cart/store/config";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";
import { testUtils } from "__tests__/utils";
import { apiServerMock } from "__tests__/mocks/apiServerMock";

const booksMock = [
  {
    id: 1,
    title: "Mock",
  },
];

beforeEach(() => {
  testUtils.render(<Order />, {
    initialStoreState: {
      [CART_REDUCER_NAME]: {
        books: booksMock,
      },
    },
  });
});

test("should have a list with books for order", () => {
  expect(screen.getByText(booksMock[0].title)).toBeInTheDocument();
});

test("should show an error for empty email input", async () => {
  const emailInput = screen.getByPlaceholderText("email");
  await act(async () => {
    fireEvent.focus(emailInput);
  });
  await act(async () => {
    fireEvent.blur(emailInput);
  });
  expect(screen.getByText("formValidationErrors.required")).toBeInTheDocument();
});

test("should show an error for invalid email", async () => {
  const emailInput = screen.getByPlaceholderText("email");
  await act(async () => {
    fireEvent.change(emailInput, {
      target: {
        value: "invalid_email",
      },
    });
  });
  await act(async () => {
    fireEvent.blur(emailInput);
  });
  expect(
    screen.getByText("formValidationErrors.invalidEmailFormat"),
  ).toBeInTheDocument();
});

test("should submit order", async () => {
  apiServerMock.use(
    rest.post(
      testUtils.buildHttpApiRoute(ORDER_HTTP_API_ENDPOINTS.postOrder()),
      async (request, response, context) => {
        const data = await request.json();
        return response(context.json(data));
      },
    ),
  );
  const emailInput = screen.getByPlaceholderText("email");
  const submitButton = screen.getByText("submit");
  await act(async () => {
    fireEvent.change(emailInput, {
      target: {
        value: "mock@mail.com",
      },
    });
  });
  act(() => {
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(screen.getByText("orderSuccess")).toBeInTheDocument();
  });
});

test("should handle order error", async () => {
  apiServerMock.use(
    rest.post(
      testUtils.buildHttpApiRoute(ORDER_HTTP_API_ENDPOINTS.postOrder()),
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
  const emailInput = screen.getByPlaceholderText("email");
  const submitButton = screen.getByText("submit");
  await act(async () => {
    fireEvent.change(emailInput, {
      target: {
        value: "mock@mail.com",
      },
    });
  });
  act(() => {
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(screen.getByText("orderError")).toBeInTheDocument();
  });
});
