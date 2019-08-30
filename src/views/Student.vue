<template>
  <div class="student">
    <add-student />
    <student-list />
  </div>
</template>

<script>
import addStudent from '@/components/student/addStudent.vue';
import studentList from '@/components/student/studentList.vue';
export default {
  components: {
    addStudent,
    studentList
  }
}
</script>

<style>

</style>