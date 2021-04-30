export const state = () => ({
  domloading: true,
  darked: true,
  scroll: 0,
})

export const mutations = {
  set_Domload(state, value) {
    state.domloading = value
  },
  set_theme(state, value) {
    state.darked = value
  },
  set_Scroll(state, value) {
    state.scroll = value
  },
}
