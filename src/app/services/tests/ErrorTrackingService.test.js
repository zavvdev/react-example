import { ErrorTrackingService } from "app/services/ErrorTrackingService";

const trackerApiMock = {
  error: jest.fn(),
};

const errorTrackingService = new ErrorTrackingService(trackerApiMock);

describe("ErrorTrackingService", () => {
  test("should call 'reportError' method", () => {
    const errorMock = "errorMock";
    errorTrackingService.reportError(errorMock);
    expect(trackerApiMock.error).toBeCalledWith(errorMock);
  });
});
