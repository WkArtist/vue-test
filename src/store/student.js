export default ({
    state: {
      studentList: []
    },
    getters: {
      newStudentList(state) {
        return state.studentList.map(item => `姓名：${item.name} 年龄：${item.age}`);
      }
    },
    mutations: {
      addStudent(state, {obj}) {
        state.studentList.push(obj);
      }
    },
    actions: {
      addStudent({commit}, obj) {
        setTimeout(() => {
          commit('addStudent',obj)
        }, 1000);
      }
    }
  })