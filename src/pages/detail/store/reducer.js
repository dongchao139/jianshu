import { mergeLeft } from "ramda";

const defaultState = {
  header: '',
  content: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'initDetailDatas':
      return mergeLeft(action.payload, state);
    default:
      return state;
  }
}