import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false || localStorage.getItem("token") != null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const loginThunk = (username, password) => async (dispatch) => {
  axios
    .post(`http://localhost:8080/api/login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data === null) {
        console.log("Invalid credentials");
      } else {
        console.log("response.data: ", response.data);
        localStorage.setItem("token", response.data.accessToken);
        dispatch(login());
      }
    });
};

export const logoutThunk = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout());
};

export default authSlice.reducer;
