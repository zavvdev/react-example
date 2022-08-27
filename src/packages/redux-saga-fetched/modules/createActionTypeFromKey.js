import { createActionType, createActionTypePatterns, createKey } from "packages/redux-saga-fetched/utils";
import { ACTION_TYPES } from "packages/redux-saga-fetched/config";

export const getCreateActionTypeFromKey = ({
  domain,
}) => (key, actionType) => {
  const createdKey = createKey(key);
  const actionTypePatterns = createActionTypePatterns(domain);
  switch (actionType) {
    case ACTION_TYPES.request:
      return createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns.request,
      });
    case ACTION_TYPES.success:
      return createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns.success,
      });
    case ACTION_TYPES.failure:
      return createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns.failure,
      });
    case ACTION_TYPES.invalidate:
      return createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns.invalidate,
      });
    default:
      return null;
  }
};
