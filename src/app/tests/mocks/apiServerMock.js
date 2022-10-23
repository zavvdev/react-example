import { setupServer } from "msw/node";

const apiServerMock = setupServer();

export { apiServerMock };
