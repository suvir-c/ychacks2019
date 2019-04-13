import * as Constants from './constants';

const initialState = [];

export default (state = initialState, action) => {
  console.log('reducer');
  switch (action.type) {
    case Constants.SUBMIT_ONLINE_FORM: {
      return [...state, action.formData];
    }
    default:
      return state;
  }
};
