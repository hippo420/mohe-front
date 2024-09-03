// store/modules/common.js
const state = {
    isLoading: false, // 로딩 상태
};

const mutations = {
    SET_LOADING(state, payload) {
        state.isLoading = payload;
    }
};

const actions = {
    setLoading({ commit }, isLoading) {
        commit('SET_LOADING', isLoading);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
