export const state = () => ({
  works: []
})

export const mutations = {
  addWork(state, work) {
    state.works = work
  }
}