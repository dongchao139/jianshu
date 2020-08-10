import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* fetchInfoLit(_action) {
  try {
    const res = yield axios.get('/info/list.json');
    const list = res.data.data;
    yield put({type: 'initInfoList', payload: list, totalPage: Math.ceil(list.length/10)});
  } catch (e) {
    console.error(e);
  }
}

function* mySaga() {
  yield takeEvery('inputInit', fetchInfoLit);
}

export default mySaga;