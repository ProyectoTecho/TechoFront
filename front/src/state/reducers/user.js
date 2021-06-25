import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction('SET_USER')

export const postData = createAsyncThunk(
  "CREATE_USER",
  ({ name, lastname, email, phone, amount, time, dni, province, creditCard, typeCard}) => {
    return axios.post(`https://sheet.best/api/sheets/2e0ba062-fc36-4551-bda1-f559a400e2fa`, {
      name,
      lastname,
      email,
      phone,
      amount,
      time,
      dni,
      province,
      creditCard,
      typeCard,
    })
  }
);

const userReducer = createReducer([], {
  [setUser]: (state, action) => action.payload,
  [postData.fulfilled]: (state, action) => action.payload,

});

export default userReducer;

