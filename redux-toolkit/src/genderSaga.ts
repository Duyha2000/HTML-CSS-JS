import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { genderActions } from "./genderSlice";
import { ListParams, ListResponse } from "./model/common";
import genderApi from "./api/genderApi";
import { Gender } from "./model/gender";

function* fetchGenderList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Gender> = yield call(
      genderApi.getAll,
      action.payload
    );
    yield put(genderActions.fetchGenderListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch key populations list", error);
    yield put(genderActions.fetchGenderListFailed());
  }
}

export function* genderSaga() {
  yield takeLatest(genderActions.fetchGenderList, fetchGenderList);
}
