import { takeEvery, call, put } from "redux-saga/effects";
import { AIR_AVAIL, DATA_LOADED, API_ERRORED } from '../constants/action-types';

import axios from 'axios';

const url = `/Airavailrs`;

let datosVuelos = {
  direct_flight: false,
  go_info: {
    origin: "CCS", 
    destination: "PMV", 
    date: "2019-11-11"
  },
  back_info: {
    origin: "PMV", 
    destination: "CCS", 
    date: "2019-11-15"
  }, 
  max_stops: 0,
  passangers_info: {
    adt: 1,
    cnn: 0, 
    inf: 0
  }
}

export default function*  watcherSaga() {
  yield takeEvery(AIR_AVAIL, workerSaga)
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e})
  }
}

function getData() {
  return axios({
    method: 'post',
    url: url,
    data: datosVuelos,
    headers: {
      'Content-Type':'application/json', 
      'Authorization':'R7c2CS4SYUGpyB31afs/TqcWX6Nuw9JrvsNwobyh5me/UoLdL6e0GxVNoqC3k2Zq'
    },
  }).then(response => response.data)
}
