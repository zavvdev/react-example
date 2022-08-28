export const DOMAIN = "rsf";

export const ACTION_TYPES = {
  request: "request",
  success: "success",
  failure: "failure",
  invalidate: "invalidate",
  reset: "reset",
};

export const DEFAULT_QUERY_OPTIONS = {
  useCache: true,
  invalidateInterval: 0,
};

export const DEFAULT_MUTATION_OPTIONS = {
  invalidateKeysOnSuccess: [],
};

export const DATA_STATUS_TYPES = {
  loading: "loading",
  fetching: "fetching",
  loaded: "loaded",
  error: "error",
  reset: "reset",
};
