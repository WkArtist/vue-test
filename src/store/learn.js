export default ({
    namespaced: true,
    state: {
      courseName: '渡一精英课堂',
      price: 10,
    },
    getters: {
      coursePrice(state){
        return '$'+state.price
      }
    },
    mutations: {
      changePrice(state, {price}) {
        state.price = price;
      }
    },
    actions: {

    }
  })