import { mergeLeft, view,lensProp, set, insertAll } from "ramda";

const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
}

export default (state = defaultState, action) => {
  const articleListLens = lensProp('articleList');
  const showScrollLens = lensProp('showScroll');
  switch (action.type) {
    case 'homeDatas':
      return mergeLeft(action.payload, state);
    case 'moreArticles':
      let list = view(articleListLens, state);
      list = insertAll(list.length, action.payload, list);
      return set(articleListLens, list, state);
    case 'toggleTopShow':
      return set(showScrollLens, action.payload, state);
    default:
      return state;
  }
}