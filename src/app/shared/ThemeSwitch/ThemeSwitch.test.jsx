import { fireEvent, screen } from "@testing-library/react";
import { ThemeSwitch } from "app/shared/ThemeSwitch/ThemeSwitch";
import { testUtils } from "__tests__/utils";

const properties = {
  onToggle: jest.fn(),
  className: "mock",
};

describe("ThemeSwitch", () => {
  test("should render ThemeSwitch (dark mode)", () => {
    const result = testUtils.render(
      <ThemeSwitch isDark onToggle={properties.onToggle} />,
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should render ThemeSwitch (light mode)", () => {
    const result = testUtils.render(
      <ThemeSwitch isDark={false} onToggle={properties.onToggle} />,
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should have a custom className", () => {
    const result = testUtils.render(
      <ThemeSwitch
        isDark
        onToggle={properties.onToggle}
        className={properties.className}
      />,
    );
    expect(
      result.container.querySelectorAll(`.${properties.className}`).length,
    ).toBe(1);
  });

  test("should call onToggle function", () => {
    testUtils.render(<ThemeSwitch isDark onToggle={properties.onToggle} />);
    fireEvent.click(screen.getByRole("button"));
    expect(properties.onToggle).toBeCalled();
  });
});
