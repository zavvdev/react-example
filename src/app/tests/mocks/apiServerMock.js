import { setupServer } from "msw/node";

const apiServerMock = setupServer();

beforeAll(() => apiServerMock.listen());
afterEach(() => apiServerMock.resetHandlers());
afterAll(() => apiServerMock.close());

export { apiServerMock };
