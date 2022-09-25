class ErrorTrackingService {
  constructor(trackerApi) {
    this.repository = trackerApi;
  }

  reportError(error) {
    this.repository.error(error);
  }
}

export const errorTrackingService = new ErrorTrackingService({
  // eslint-disable-next-line no-console
  error: console.error,
});
