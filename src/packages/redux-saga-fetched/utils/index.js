import { ACTION_TYPES, EFFECT_TYPES } from "packages/redux-saga-fetched/config";

export const createActionType = ({ createdKey, actionTypePattern }) => {
  return `${createdKey}_${actionTypePattern}`;
};

export const createKey = (key) => key.join("_");

export const createActionTypePatterns = (domain) => ({
  [EFFECT_TYPES.query]: {
    request: `${domain}@${ACTION_TYPES[EFFECT_TYPES.query].request}`,
    success: `${domain}@${ACTION_TYPES[EFFECT_TYPES.query].success}`,
    failure: `${domain}@${ACTION_TYPES[EFFECT_TYPES.query].failure}`,
    invalidate: `${domain}@${ACTION_TYPES[EFFECT_TYPES.query].invalidate}`,
    reset: `${domain}@${ACTION_TYPES[EFFECT_TYPES.query].reset}`,
  },
  [EFFECT_TYPES.mutation]: {
    request: `${domain}@${ACTION_TYPES[EFFECT_TYPES.mutation].request}`,
    success: `${domain}@${ACTION_TYPES[EFFECT_TYPES.mutation].success}`,
    failure: `${domain}@${ACTION_TYPES[EFFECT_TYPES.mutation].failure}`,
    reset: `${domain}@${ACTION_TYPES[EFFECT_TYPES.mutation].reset}`,
  },
});
