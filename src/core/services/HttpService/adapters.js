export const httpResponseAdapter = (axiosResponsePayload) => ({
  status: axiosResponsePayload?.status,
  payload: axiosResponsePayload?.data || null,
});
