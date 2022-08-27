export const DOMAIN = "rsf";

export const ACTION_TYPE_PATTERNS = {
  request: "rsf@request",
  success: "rsf@success",
  failure: "rsf@failure",
};

export const DEFAULT_REQUEST_OPTIONS = {
  useCache: true,
};

export const DATA_STATUS_TYPES = {
  loading: "loading",
  fetching: "fetching",
  loaded: "loaded",
  error: "error",
  idle: "idle",
};
