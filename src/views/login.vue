<template>
  <div class="login">
      <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
    methods: {
        login() {
            document.cookie = 'login=true';
            alert('登陆成功！');
        }
    }
}
</script>

<style>
    .login{
        margin-top: 20px;
    }
</style>