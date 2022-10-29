import { fireEvent, screen } from "@testing-library/react";
import { CartBook } from "cart/shared/CartBook/CartBook";
import { testUtils } from "__tests__/utils";

const properties = {
  cover: "https://mock.com/42",
  title: "Mock title",
  author: "Mock Author",
  price: "$42",
  onRemoveFromCart: jest.fn(),
};

const component = (
  <CartBook
    cover={properties.cover}
    title={properties.title}
    author={properties.author}
    price={properties.price}
    onRemoveFromCart={properties.onRemoveFromCart}
  />
);

test("should render CartBook", () => {
  const result = testUtils.render(component);
  expect(result.asFragment()).toMatchSnapshot();
});

test("should have title, price & author", () => {
  testUtils.render(component);
  expect(screen.getByText(properties.title)).toBeInTheDocument();
  expect(screen.getByText(properties.price)).toBeInTheDocument();
  expect(screen.getByText(properties.author)).toBeInTheDocument();
});

test("should call onRemoveFromCart function", () => {
  testUtils.render(component);
  const removeButton = screen.getByText("cartBook.remove");
  fireEvent.click(removeButton);
  expect(properties.onRemoveFromCart).toBeCalled();
});
