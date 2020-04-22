const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});
export const GET_TYPES = asyncActionType('GET_TYPES');
export const GET_RANKING = asyncActionType('GET_RANKING');
