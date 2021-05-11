import * as t from './types'

export default {
  [t.SET_NAVIGATION]: (state, payload) => {
    state.isNavigation = payload
  }
}
