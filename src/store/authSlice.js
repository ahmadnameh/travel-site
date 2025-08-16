import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");

const initialState = {
  isAuthenticated: !!savedUser,
  user: savedUser ? JSON.parse(savedUser) : null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const userData = action.payload;
      localStorage.setItem("user", JSON.stringify(userData));
      state.isAuthenticated = true;
      state.user = userData;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.isAuthenticated = false;
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
