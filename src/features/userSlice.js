import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: true,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectIsLoading = (state) => state.user.isLoading;
export const selectUser = (state) => state.user.user;
export const useUser = () => useSelector(selectUser);
export const useIsLoading = () => useSelector(selectIsLoading);

export default userSlice.reducer;
