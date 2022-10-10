import { fireEvent, screen } from "@testing-library/react";
import { testUtils } from "app/tests/utils";
import { Button } from "app/shared/Button/Button";

const properties = {
  children: "Button",
  className: "classNameMock",
  onClick: jest.fn(),
};

describe("Button", () => {
  test("should render Button", () => {
    const result = testUtils.render(
      <Button onClick={properties.onClick}>{properties.children}</Button>,
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should have a custom className", () => {
    const result = testUtils.render(
      <Button onClick={properties.onClick} className={properties.className}>
        {properties.children}
      </Button>,
    );
    expect(
      result.container.querySelectorAll(`.${properties.className}`).length,
    ).toBe(1);
  });

  test("should have a disabled className", () => {
    const result = testUtils.render(
      <Button onClick={properties.onClick} disabled>
        {properties.children}
      </Button>,
    );
    expect(result.container.querySelectorAll(".disabled").length).toBe(1);
  });

  test("should have a full width className", () => {
    const result = testUtils.render(
      <Button onClick={properties.onClick} fullWidth>
        {properties.children}
      </Button>,
    );
    expect(result.container.querySelectorAll(".rootFullWidth").length).toBe(1);
  });

  test("should call onClick function", () => {
    testUtils.render(
      <Button onClick={properties.onClick}>{properties.children}</Button>,
    );
    fireEvent.click(screen.getByText(properties.children));
    expect(properties.onClick).toBeCalled();
  });
});
