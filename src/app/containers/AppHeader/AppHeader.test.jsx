import { testUtils } from "app/tests/utils";
import { AppHeader } from "app/containers/AppHeader/AppHeader";

describe("AppHeader container", () => {
  test("should render AppHeader", () => {
    const result = testUtils.render(<AppHeader />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
