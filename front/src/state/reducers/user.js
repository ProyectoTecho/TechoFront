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
    return axios.post(`/api/user`, {
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
console.log(postData)

// export const putData = createAsyncThunk('UPDATE_USER', () => {
//     //axios.post
// })

const userReducer = createReducer([], {
  [setUser]: (state, action) => action.payload,
  [postData.fulfilled]: (state, action) => action.payload,

});

export default userReducer;
