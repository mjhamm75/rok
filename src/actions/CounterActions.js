import { INCREMENT_COUNTER, DECREMENT_COUNTER, SYNC_ADDRESS, UPDATE_EMPLOYMENT_INFO, UPDATE_PERSONAL_INFO, UPDATE_SPOUSE_INFO, UPDATE_DEPENDENT_INFO } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function updatePersonalInfo(key, value) {
  return {
    type: UPDATE_PERSONAL_INFO,
    key,
    value
  }
}

export function updateSpouseInfo(key, value) {
  return {
    type: UPDATE_SPOUSE_INFO,
    key,
    value
  }
}

export function updateDependentInfo(key, value) {
  return {
    type: UPDATE_DEPENDENT_INFO,
    key,
    value
  }
}

export function updateEmploymentInfo(employmentType, key, value) {
  return {
    type: UPDATE_EMPLOYMENT_INFO,
    employmentType,
    key,
    value
  }
}

export function syncAddress(address) {
  return {
    type: SYNC_ADDRESS,
    address
  }
}