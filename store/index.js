export const state = () => ({
  domloading: true,
  darked: true,
})

export const mutations = {
  set_Domload(state, value) {
    state.domloading = value
  },
  set_theme(state, value) {
    state.darked = value
  },
}
