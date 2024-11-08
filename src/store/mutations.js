const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('auth', token);
    },
    setUserData(state, userData) {
        state.userData = userData;
        state.isUserDataLoaded = true;
        localStorage.setItem('userData', JSON.stringify(userData));
    },
    setIsUserDataLoaded(state, isLoaded) {
        state.isUserDataLoaded = isLoaded;
    },
    clearAuth(state) {
        state.token = null;
        state.userData = null;
        state.isUserDataLoaded = false;
        localStorage.removeItem('auth');
        localStorage.removeItem('isUserDataLoaded');
        localStorage.removeItem('userData');
      },
};

export default mutations;