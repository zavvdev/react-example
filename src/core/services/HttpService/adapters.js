export const httpResponseAdapter = (responsePayload) => ({
  status: responsePayload?.status,
  payload: responsePayload?.data || null,
});
