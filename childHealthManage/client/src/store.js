import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const types = {
  SET_AUTHENTICATED:"SET_AUTHENTICATED",
  SET_USER:"SET_USER"
};
//状态
const state = {
  isAuthenticated:false,
  user:{}
};
//获取状态
const getters = {
  isAuthenticated:state => state.isAuthenticated,
  user:state => state.user
};
//更改状态
const mutations = {
  [types.SET_AUTHENTICATED](state,isAuthenticated){
    if(isAuthenticated){
      state.isAuthenticated = isAuthenticated;
    }else{
      state.isAuthenticated = false;
    }
  },
  [types.SET_USER](state,user){
    if(user){
      state.user = user;
    }else{
      state.user = {};
    }
  }
};
const actions = {
  setAuthenticated:({commit},isAuthenticated) => {
    commit(types.SET_AUTHENTICATED,isAuthenticated);
  },
  setUser:({commit},user) => {
    commit(types.SET_USER,user);
  },
  clearCurrentState: ({commit}) => {
    commit(types.SET_AUTHENTICATED);
    commit(types.SET_USER,null);
  }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
