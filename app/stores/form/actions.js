import * as Constants from './constants';

export function submitOnlineForm(formData) {
  console.log('actions file');
  return {
    type: Constants.SUBMIT_ONLINE_FORM,
    formData,
  };
}
