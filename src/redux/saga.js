import { takeLatest, put, spawn, debounce, retry } from 'redux-saga/effects';
import { searchSkills } from '../api'
import {
    searchSkillsRequest,
    searchSkillsSuccess,
    searchSkillsFailure,
    changeSearchField,
    // clearSearch
} from './slices'

function filterChangeSearchAction({ type, payload }) {
    return type === changeSearchField().type && payload.search.trim() !== '';
}
function* handleChangeSearchSaga(action) {
    yield put(searchSkillsRequest(action.payload.search));
}

function* watchChangeSearchSaga() {
    yield debounce(1000, filterChangeSearchAction, handleChangeSearchSaga);
}
function* handleSearchSkillsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000;
        const data = yield retry(
            retryCount,
            retryDelay,
            searchSkills,
            action.payload
        );
        yield put(searchSkillsSuccess(data));
    } catch (e) {
        yield put(searchSkillsFailure('Ошибка'));
    }
}

function* watchSearchSkillsSaga() {
    yield takeLatest(searchSkillsRequest().type, handleSearchSkillsSaga);
}
export default function* saga() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga);
}
