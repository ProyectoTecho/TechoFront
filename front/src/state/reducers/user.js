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
    return axios.post(`https://sheet.best/api/sheets/79372238-f610-4142-b1f4-87faedddfe10`, {
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

