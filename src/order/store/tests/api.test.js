import { act, renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";
import { usePostOrderMutation } from "order/store/api";
import { postOrderRequestAdapter } from "order/store/adapters/request";
import { apiServerMock } from "__tests__/mocks/apiServerMock";
import { testUtils } from "__tests__/utils";

test("should post order", async () => {
  apiServerMock.use(
    rest.post(
      testUtils.buildHttpApiRoute(ORDER_HTTP_API_ENDPOINTS.postOrder()),
      async (request, response, context) => {
        const data = await request.json();
        return response(context.json(data));
      },
    ),
  );
  const requestPayload = {
    email: "mock@mock.com",
    books: [
      {
        id: 1,
      },
    ],
  };
  const expectedResponse = postOrderRequestAdapter(requestPayload);
  const { result } = renderHook(() => usePostOrderMutation(), {
    wrapper: testUtils.createWrapper(),
  });
  const [postOrder] = result.current;
  let responsePayload;
  await act(async () => {
    responsePayload = await postOrder(requestPayload);
  });
  await waitFor(() => {
    expect(responsePayload?.data).toEqual(expectedResponse);
  });
});
