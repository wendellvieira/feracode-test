import Vue from 'vue'
import Vuex from 'vuex'
import BACKEND from './backend.js'
import VuexPersistence from 'vuex-persist'
import localForage from "localforage";

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const vuexLocal = new VuexPersistence({
    storage: localForage
  })
  const Store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules:{
      BACKEND
    },
    state: {
      user: null
    },
    mutations: {
      SET_USER (state, payload) {
        state.user = payload
      },
      SIGN_OUT (state) {
        state.user = null
      }
    },
  })

  return Store
}
