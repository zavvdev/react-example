import { act, renderHook, waitFor } from "@testing-library/react";
import { useOrderForm } from "order/hooks/useOrderForm";
import { testUtils } from "__tests__/utils";

test("should set valid email value", async () => {
  const { result } = renderHook(() => useOrderForm({ onSubmit: () => {} }), {
    wrapper: testUtils.createWrapper(),
  });
  const emailMock = "mock@mail.com";
  await act(async () => {
    result.current.handleChange({
      target: {
        name: "email",
        value: emailMock,
      },
    });
  });
  expect(result.current.values.email).toBe(emailMock);
  expect(result.current.isValid).toBe(true);
});

test("should set invalid email & return error", async () => {
  const { result } = renderHook(() => useOrderForm({ onSubmit: () => {} }), {
    wrapper: testUtils.createWrapper(),
  });
  await act(async () => {
    result.current.handleChange({
      target: {
        name: "email",
        value: "invalid_email",
      },
    });
  });
  await act(async () => {
    result.current.handleBlur({
      target: {
        name: "email",
      },
    });
  });
  await waitFor(() => {
    expect(result.current.getFieldError("email")).toBe(
      "formValidationErrors.invalidEmailFormat",
    );
  });
  expect(result.current.isValid).toBe(false);
});

test("should call onSubmit callback with email", async () => {
  const onSubmitMock = jest.fn();
  const { result } = renderHook(
    () => useOrderForm({ onSubmit: onSubmitMock }),
    {
      wrapper: testUtils.createWrapper(),
    },
  );
  const expectedSubmitArguments = {
    email: "mock@mail.com",
  };
  await act(async () => {
    result.current.handleChange({
      target: {
        name: "email",
        value: expectedSubmitArguments.email,
      },
    });
  });
  await act(async () => {
    result.current.handleSubmit();
  });
  expect(onSubmitMock).toBeCalledWith(expectedSubmitArguments);
});
