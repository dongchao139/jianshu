import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchHomeDatas(_action) {
  try {
    const res = yield axios.get('/info/home.json');
    const homeDatas = res.data.data;
    yield put({ type: 'homeDatas', payload: homeDatas });
  } catch (e) {
    console.log(e);
  }
}

function* fetchMoreArticles() {
  try {
    const res = yield axios.get('/info/moreArticles.json');
    const moreArticles = res.data.data;
    yield put({ type: 'moreArticles', payload: moreArticles });
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeEvery('initHomeDatas', fetchHomeDatas);
  yield takeEvery('loadMoreArticle', fetchMoreArticles)
}

export default mySaga;