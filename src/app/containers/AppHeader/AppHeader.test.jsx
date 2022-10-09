import { screen } from "@testing-library/react";
import { testUtils } from "app/tests/utils";
import { AppHeader } from "app/containers/AppHeader/AppHeader";

describe("AppHeader container", () => {
  test("should render AppHeader (snapshot)", () => {
    const result = testUtils.render(<AppHeader />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should have app name", () => {
    testUtils.render(<AppHeader />);
    expect(screen.getByText(/appName/)).toBeInTheDocument();
  });
});
