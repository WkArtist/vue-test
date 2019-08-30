<template>
<div class="student-list">
  学生列表：
  <ul>
      <li v-for="(student,index) in studentList" :key="index">{{student}}</li>
  </ul>
</div>
  
</template>

<script>
export default {
  computed: {
    studentList() {
      return this.$store.getters.newStudentList
    }
  }
}
</script>

<style>
  .student-list{
    margin-top: 10px;
  }
  .student-list ul {
    margin-top: 10px;
  }
  .student-list li {
    margin-bottom: 10px;
  }
</style>