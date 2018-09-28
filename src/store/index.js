import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import state from './state'
import mutations from './mutation'
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  getters:{
    getPersons(state){
      return state.persons
    }
  },
  state:{
    persons:[]
  },
  mutations:{
    setPersons(state,single){
      state.persons.push(single)
    }
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
})
