import {lensProp, set, view, mergeLeft} from 'ramda';

const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
};

export default (state = defaultState, action) => {
  const focusLens = lensProp('focused');
  const mouseInLens = lensProp('mouseIn');
  const totalPageLens = lensProp('totalPage');
  const pageLens = lensProp('page');
  switch (action.type) {
    case 'inputFocus':
      return set(focusLens, true, state);
    case 'inputBlur':
      return set(focusLens, false, state);
    case 'initInfoList':
      return mergeLeft({list: action.payload, totalPage: action.totalPage}, state);
    case 'mouseEnter':
      return set(mouseInLens, true, state);
    case 'mouseLeave':
      return set(mouseInLens, false, state);
    case 'changePage':
      const page = view(pageLens, state);
      const totalPage = view(totalPageLens, state);
      const p = (page + 1) % totalPage;
      return set(pageLens, p === 0 ? 5: p, state);
    default:
      return state;
  }
}