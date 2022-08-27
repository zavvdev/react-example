export const DOMAIN = "rsf";

export const ACTION_TYPE_PATTERNS = {
  request: "rsf@request",
  success: "rsf@success",
  failure: "rsf@failure",
  invalidate: "rsf@invalidate",
};

export const DEFAULT_QUERY_OPTIONS = {
  useCache: true,
};

export const DEFAULT_MUTATION_OPTIONS = {
  invalidateKeysOnSuccess: [],
};

export const DATA_STATUS_TYPES = {
  loading: "loading",
  fetching: "fetching",
  loaded: "loaded",
  error: "error",
  idle: "idle",
};
