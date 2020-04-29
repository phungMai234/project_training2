const asyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});
export const START_DATE = "START_DATE";
export const END_DATE = "END_DATE";

export const GET_TYPES = asyncActionType('GET_TYPES');
export const GET_RANKING = asyncActionType('GET_RANKING');
export const GET_HOUR = asyncActionType('GET_HOUR');
export const GET_QUERY = asyncActionType('GET_QUERY');
