import * as Constants from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case Constants.SUBMIT_ONLINE_FORM: {
      return [...state, action.formData];
    }
    default:
      return state;
  }
};
