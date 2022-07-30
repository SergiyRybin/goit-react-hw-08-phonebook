export const getToken = (state) => state.auth.token;
export const getProfileState = (state) => state.auth.profile;
export const getProfileLoading = (state) => state.auth.isProfileLoading;
export const isAutenticated = (state) => !!getToken(state);
export const getLoginErrror = (state) => state.auth.loginError;
export const getRegisterError =(state )=> state.auth.CreateError
