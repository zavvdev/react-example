export const DOMAIN = "rsf";

export const EFFECT_TYPES = {
  query: "query",
  mutation: "mutation",
};

export const ACTION_TYPES = {
  [EFFECT_TYPES.query]: {
    request: `${EFFECT_TYPES.query}/request`,
    success: `${EFFECT_TYPES.query}/success`,
    failure: `${EFFECT_TYPES.query}/failure`,
    invalidate: `${EFFECT_TYPES.query}/invalidate`,
    reset: `${EFFECT_TYPES.query}/reset`,
  },
  [EFFECT_TYPES.mutation]: {
    request: `${EFFECT_TYPES.mutation}/request`,
    success: `${EFFECT_TYPES.mutation}/success`,
    failure: `${EFFECT_TYPES.mutation}/failure`,
    reset: `${EFFECT_TYPES.mutation}/reset`,
  },
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
