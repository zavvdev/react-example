import { testUtils } from "app/tests/utils";
import { Typography } from "app/shared/Typography/Typography";

describe("Typography", () => {
  test("should render Typography with default tag", () => {
    const result = testUtils.render(<Typography>mock</Typography>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should render Typography with custom tag", () => {
    const result = testUtils.render(<Typography tag="h1">mock2</Typography>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should have a custom className", () => {
    const className = "mock";
    const result = testUtils.render(
      <Typography className={className}>mock2</Typography>,
    );
    expect(result.container.querySelectorAll(`.${className}`).length).toBe(1);
  });
});
