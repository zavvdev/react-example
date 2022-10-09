import { screen } from "@testing-library/react";
import { testUtils } from "app/tests/utils";
import { Main } from "app/layouts/Main/Main";

describe("Main layout", () => {
  test("should render Main layout", () => {
    const childrenMock = "childrenMock";
    const result = testUtils.render(
      <Main>
        <div>{childrenMock}</div>
      </Main>,
    );
    expect(result.asFragment()).toMatchSnapshot();
    expect(screen.getByText(childrenMock)).toBeInTheDocument();
  });
});
