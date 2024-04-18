import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = [...action.payload];
    },
  },
});

export const { getUsers } = userSlice.actions;

export const getUsersThunk = () => async (dispatch) => {
  let token = localStorage.getItem("token");

  axios
    .get("http://localhost:8080/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("response.data: ", response);
      dispatch(getUsers(response.data));
    });
};

export default userSlice.reducer;
