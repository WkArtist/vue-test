<template>
  <div class="community">
      <ul class="nav">
        <router-link tag="li" to="/community/academic">学术讨论</router-link>
        <router-link tag="li" to="/community/downLoad">资源下载</router-link>
        <router-link tag="li" to="/community/personal">个人中心</router-link>
      </ul>
      <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .community{
        margin-top: 50px;
    }
    .community .nav {
        width: 400px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .community .nav li {
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    .community .router-link-exact-active{
        color: #fff;
        background-color: #38f;
    }
</style>