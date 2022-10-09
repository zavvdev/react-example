import { screen } from "@testing-library/react";
import { testUtils } from "app/tests/utils";
import { Main } from "app/layouts/Main/Main";

const childrenMock = "childrenMock";

describe("Main layout", () => {
  test("should render Main layout (snapshot)", () => {
    const result = testUtils.render(
      <Main>
        <div>{childrenMock}</div>
      </Main>,
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("should have a children", () => {
    testUtils.render(
      <Main>
        <div>{childrenMock}</div>
      </Main>,
    );
    expect(screen.getByText(childrenMock)).toBeInTheDocument();
  });
});
