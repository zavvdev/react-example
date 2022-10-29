import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { BOOKS_HTTP_API_ENDPOINTS } from "books/store/config";
import { useGetAllBooksQuery } from "books/store/api";
import { getAllBooksResponseAdapter } from "books/store/adapters/response";
import { apiServerMock } from "__tests__/mocks/apiServerMock";
import { testUtils } from "__tests__/utils";

const getAllBooksApiResponse = [
  {
    id: 42,
    title: "Mock",
    author_fullname: "Mock Mock",
    publish_date: "Aug 12, 2042",
    price: "$42",
    cover_url: "http://mock.com/images/42.jpg",
  },
];

beforeEach(() => {
  apiServerMock.use(
    rest.get(
      testUtils.buildHttpApiRoute(BOOKS_HTTP_API_ENDPOINTS.getAllBooks()),
      (_, response, context) => {
        return response(context.json(getAllBooksApiResponse));
      },
    ),
  );
});

test("should return all books data", async () => {
  const { result } = renderHook(() => useGetAllBooksQuery(), {
    wrapper: testUtils.createWrapper(),
  });
  await waitFor(() =>
    expect(result.current.data).toEqual(
      getAllBooksResponseAdapter(getAllBooksApiResponse),
    ),
  );
});
