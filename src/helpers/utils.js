import { UPDATE_LOADING } from './enums/Constants';

export const not = obj => !obj;

export const startLoading = identifier => ({
  type: UPDATE_LOADING,
  loading: { [identifier]: true },
});

export const endLoading = identifier => ({
  type: UPDATE_LOADING,
  loading: { [identifier]: false },
});

export default {
  endLoading,
  startLoading,
  not,

};
