import { fireEvent, screen } from "@testing-library/react";
import { Input } from "app/shared/Input/Input";
import { testUtils } from "__tests__/utils";

const properties = {
  type: "text",
  name: "mock",
  placeholder: "Mock",
  className: "mock",
  errorText: "error mock",
  onChange: jest.fn(),
  onBlur: jest.fn(),
  value: "42",
};

test("should render Input", () => {
  const result = testUtils.render(
    <Input
      type={properties.type}
      name={properties.name}
      onChange={properties.onChange}
      value={properties.value}
    />,
  );
  expect(result.asFragment()).toMatchSnapshot();
});

test("should have a placeholder", () => {
  testUtils.render(
    <Input
      type={properties.type}
      name={properties.name}
      onChange={properties.onChange}
      value={properties.value}
      placeholder={properties.placeholder}
    />,
  );
  expect(
    screen.getByPlaceholderText(properties.placeholder),
  ).toBeInTheDocument();
});

test("should have a custom className", () => {
  const result = testUtils.render(
    <Input
      type={properties.type}
      name={properties.name}
      onChange={properties.onChange}
      value={properties.value}
      className={properties.className}
    />,
  );
  expect(
    result.container.querySelectorAll(`.${properties.className}`).length,
  ).toBe(1);
});

test("should have error text", () => {
  testUtils.render(
    <Input
      type={properties.type}
      name={properties.name}
      onChange={properties.onChange}
      value={properties.value}
      errorText={properties.errorText}
    />,
  );
  expect(screen.getByText(properties.errorText)).toBeInTheDocument();
});

test("should call onChange function", () => {
  testUtils.render(
    <Input
      id="mock"
      type={properties.type}
      name={properties.name}
      onChange={properties.onChange}
      value={properties.value}
      placeholder={properties.placeholder}
    />,
  );
  fireEvent.change(screen.getByPlaceholderText(properties.placeholder), {
    target: { value: "123" },
  });
  expect(properties.onChange).toBeCalled();
});

test("should call onBlur function", () => {
  testUtils.render(
    <Input
      id="mock"
      type={properties.type}
      name={properties.name}
      onChange={properties.onChange}
      value={properties.value}
      placeholder={properties.placeholder}
      onBlur={properties.onBlur}
    />,
  );
  fireEvent.blur(screen.getByPlaceholderText(properties.placeholder));
  expect(properties.onBlur).toBeCalled();
});
