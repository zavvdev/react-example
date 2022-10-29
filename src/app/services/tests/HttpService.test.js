import { HttpService } from "app/services/HttpService";

const axiosInstanceMock = jest.fn();
axiosInstanceMock.get = jest.fn();
axiosInstanceMock.post = jest.fn();
axiosInstanceMock.put = jest.fn();
axiosInstanceMock.patch = jest.fn();
axiosInstanceMock.delete = jest.fn();

const httpService = new HttpService(axiosInstanceMock);

test("should call 'call' method", async () => {
  const callReturn = "callReturn";
  const callArgument = {
    url: "mock.com",
    method: "get",
    data: {},
    params: {},
  };
  axiosInstanceMock.mockReturnValue(callReturn);
  const result = await httpService.call(callArgument);
  expect(axiosInstanceMock).toBeCalledWith(callArgument);
  expect(result).toBe(callReturn);
});

test("should call 'get' method", async () => {
  const getReturn = "getReturn";
  const getUrl = "mock.com/get";
  const getConfig = {};
  axiosInstanceMock.get.mockReturnValue(getReturn);
  const result = await httpService.get(getUrl, getConfig);
  expect(axiosInstanceMock.get).toBeCalledWith(getUrl, getConfig);
  expect(result).toBe(getReturn);
});

test("should call 'post' method", async () => {
  const postReturn = "postReturn";
  const postUrl = "mock.com/post";
  const postData = {};
  const postConfig = {};
  axiosInstanceMock.post.mockReturnValue(postReturn);
  const result = await httpService.post(postUrl, postData, postConfig);
  expect(axiosInstanceMock.post).toBeCalledWith(postUrl, postData, postConfig);
  expect(result).toBe(postReturn);
});

test("should call 'put' method", async () => {
  const putReturn = "putReturn";
  const putUrl = "mock.com/put";
  const putData = {};
  const putConfig = {};
  axiosInstanceMock.put.mockReturnValue(putReturn);
  const result = await httpService.put(putUrl, putData, putConfig);
  expect(axiosInstanceMock.put).toBeCalledWith(putUrl, putData, putConfig);
  expect(result).toBe(putReturn);
});

test("should call 'patch' method", async () => {
  const patchReturn = "patchReturn";
  const patchUrl = "mock.com/patch";
  const patchData = {};
  const patchConfig = {};
  axiosInstanceMock.patch.mockReturnValue(patchReturn);
  const result = await httpService.patch(patchUrl, patchData, patchConfig);
  expect(axiosInstanceMock.patch).toBeCalledWith(
    patchUrl,
    patchData,
    patchConfig,
  );
  expect(result).toBe(patchReturn);
});

test("should call 'delete' method", async () => {
  const deleteReturn = "deleteReturn";
  const deleteUrl = "mock.com/delete";
  const deleteConfig = {};
  axiosInstanceMock.delete.mockReturnValue(deleteReturn);
  const result = await httpService.delete(deleteUrl, deleteConfig);
  expect(axiosInstanceMock.delete).toBeCalledWith(deleteUrl, deleteConfig);
  expect(result).toBe(deleteReturn);
});
