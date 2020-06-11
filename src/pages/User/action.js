import { INPUT } from "./type";

const successState = (data) => {
  return {
    type: INPUT,
    data,
  };
};

export const actionSave = (dispatch, payload) => {
  dispatch(successState(payload));
};