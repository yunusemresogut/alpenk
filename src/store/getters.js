const getters = {
    getToken(state) {
        return state.token;
    },
    getUserData(state) {
        localStorage.getItem('userData') ? state.userData = JSON.parse(localStorage.getItem('userData')) : state.userData = null;
        return state.userData;
    },
};

export default getters;