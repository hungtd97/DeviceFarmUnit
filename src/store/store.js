import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'
import { isEmptyObject } from '../utils';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: true,
    clocks: []
  },
  getters: {

  },
  mutations: {
    addClock(state, clock) {
      state.clocks.push(clock)
    },
    updateLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    initRealtimeListeners(context) {
      context.commit('updateLoading', true)
      let id = 0
      db.ref('ClockDev').once('value', (data) => {
        let node = data.val()
        node.forEach((a, b) => {
          if (isEmptyObject(a) == false) {
            console.log(b)
            console.log(Object.keys(node)[b])
            context.commit('addClock', {
              ...a,
              id: b
            })
          }
          id = id + 1
        })
      })
      context.commit('updateLoading', false)
    },
  }
})
