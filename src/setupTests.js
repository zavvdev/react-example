import "@testing-library/jest-dom";
import "app/tests/mocks/nodeModules/reactI18next";
import "app/tests/mocks/webApiLocalStorage";
import { apiServerMock } from "app/tests/mocks/apiServerMock";

beforeAll(() => apiServerMock.listen());
afterEach(() => apiServerMock.resetHandlers());
afterAll(() => apiServerMock.close());
