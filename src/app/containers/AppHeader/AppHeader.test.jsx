import { AppHeader } from "app/containers/AppHeader/AppHeader";
import { testUtils } from "__tests__/utils";

describe("AppHeader container", () => {
  test("should render AppHeader", () => {
    const result = testUtils.render(<AppHeader />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
