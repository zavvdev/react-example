import { Main } from "app/layouts/Main/Main";
import { testUtils } from "__tests__/utils";

const childrenMock = "childrenMock";

describe("Main layout", () => {
  test("should render Main layout", () => {
    const result = testUtils.render(
      <Main>
        <div>{childrenMock}</div>
      </Main>,
    );
    expect(result.asFragment()).toMatchSnapshot();
  });
});
