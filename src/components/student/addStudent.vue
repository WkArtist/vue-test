<template>
  <div class="add-student">
    <div class="add">添加学生：</div>
    <div>
       <div>姓名：<input type="text" v-model="name"></div>
       <div>年龄：<input type="text" v-model="age"></div>
    </div>
    <button @click="add">添加</button>
  </div>
  
</template>

<script>
export default {
    data () {
        return {
            name: null,
            age: null
        }
    },
    methods: {
        add() {
            var obj = {name: this.name,age: this.age}
            this.$store.dispatch('addStudent',{obj})
        }
    }
}
</script>

<style>
    .add-student .add {
        margin-bottom: 10px;
    }
    .add-student{
        margin-top: 20px;
    }
    .add-student input {
        margin: 10px 0;
    }
</style>