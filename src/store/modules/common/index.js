import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  isNavigation: false,
  isMapDialog: false
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
