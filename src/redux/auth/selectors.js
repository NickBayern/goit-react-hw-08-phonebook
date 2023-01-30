export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoginError = state => state.auth.loginError;

export const selectRegisterError = state => state.auth.registerError;