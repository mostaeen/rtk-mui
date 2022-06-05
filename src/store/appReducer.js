import initialState from "./initialState";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const getAppState = (state) => state.app;

export const getBuildVersion = createSelector(
  getAppState,
  (appState) => appState.buildVersion
);

export const upgradeVersion = createAction("app/upgrade");

const AppReducer = createReducer(initialState.app, {
  [upgradeVersion]: (state, action) => {
    state.buildVersion += 1;
  }
});

export default AppReducer;
