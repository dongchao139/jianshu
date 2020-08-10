import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false
 });

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'changeFocus':
      return state.set('focused', !state.get('focused'));
    default:
      return state;
  }
}