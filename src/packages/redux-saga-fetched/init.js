import { getReducer } from "packages/redux-saga-fetched/modules/reducer";
import { getQuery } from "packages/redux-saga-fetched/modules/query";
import { getSelector } from "packages/redux-saga-fetched/modules/selector";
import { DOMAIN } from "packages/redux-saga-fetched/config";
import { getMutation } from "packages/redux-saga-fetched/modules/mutation";
import { getInvalidate } from "packages/redux-saga-fetched/modules/invalidate";
import { createActionTypePatterns } from "packages/redux-saga-fetched/utils";
import { getCreateActionTypeFromKey } from "packages/redux-saga-fetched/modules/createActionTypeFromKey";

export const init = ({
  domain,
}) => {
  const options = {
    domain: domain || DOMAIN,
  };

  const actionTypePatterns = createActionTypePatterns(options.domain);

  return {
    reducer: getReducer({
      actionTypePatterns,
    }),
    query: getQuery({
      actionTypePatterns,
      domain: options.domain,
    }),
    mutation: getMutation({
      actionTypePatterns,
    }),
    select: getSelector({
      domain: options.domain,
    }),
    invalidate: getInvalidate({
      actionTypePatterns,
    }),
    createActionTypeFromKey: getCreateActionTypeFromKey({
      domain: options.domain,
    }),
  };
};