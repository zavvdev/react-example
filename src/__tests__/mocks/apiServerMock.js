import { setupServer } from "msw/node";

const apiServerMock = setupServer();

beforeAll(() =>
  apiServerMock.listen({
    onUnhandledRequest: "bypass",
  }),
);
afterEach(() => apiServerMock.resetHandlers());
afterAll(() => apiServerMock.close());

export { apiServerMock };
