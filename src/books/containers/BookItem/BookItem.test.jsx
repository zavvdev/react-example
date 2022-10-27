import { fireEvent, screen } from "@testing-library/react";
import { BookItem } from "books/containers/BookItem/BookItem";
import { testUtils } from "__tests__/utils";

describe("BookItem container", () => {
  test("should render BookItem which has isInCart=false", () => {
    const result = testUtils.render(
      <BookItem
        title="Mock"
        author="mock"
        date="12/12/22"
        price="$42"
        cover="https://mock.com/42"
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        isInCart={false}
      />,
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should render BookItem which has isInCart=true", () => {
    const result = testUtils.render(
      <BookItem
        title="Mock"
        author="mock"
        date="12/12/22"
        price="$42"
        cover="https://mock.com/42"
        onAddToCart={() => {}}
        onRemoveFromCart={() => {}}
        isInCart
      />,
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should call onAddToCart function", () => {
    const onAddToCartMock = jest.fn();
    testUtils.render(
      <BookItem
        title="Mock"
        author="mock"
        date="12/12/22"
        price="$42"
        cover="https://mock.com/42"
        onAddToCart={onAddToCartMock}
        onRemoveFromCart={() => {}}
        isInCart={false}
      />,
    );
    const addToCartButton = screen.getByText("bookItem.addToCart");
    fireEvent.click(addToCartButton);
    expect(onAddToCartMock).toBeCalled();
  });

  test("should call onRemoveFromCart function", () => {
    const onRemoveFromCartMock = jest.fn();
    testUtils.render(
      <BookItem
        title="Mock"
        author="mock"
        date="12/12/22"
        price="$42"
        cover="https://mock.com/42"
        onAddToCart={() => {}}
        onRemoveFromCart={onRemoveFromCartMock}
        isInCart
      />,
    );
    const removeFromCartButton = screen.getByText("bookItem.alreadyInCart");
    fireEvent.click(removeFromCartButton);
    expect(onRemoveFromCartMock).toBeCalled();
  });
});
