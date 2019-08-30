<template>
  <div id="app">
    <div id="nav">
      <div class="logo">渡一教育</div>
      <ul>
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/learn">课程学习</router-link> 
        <router-link tag="li" to="/student">学员展示</router-link> 
        <router-link tag="li" to="/about">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link> 
      </ul>
    </div>
    <router-view class="view"/>
  </div>
</template>

<style scoped>

#nav {
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  padding: 30px 200px 30px 200px;
  margin: 0 auto;
  background-color: #38f;
  color: #fff;
}
#nav .logo {
  float: left;
  list-style: none;
}
#nav ul {
  width: 40%;
  height: 100%;
  float: right;
  display: flex;
  justify-content: space-between;
}
#nav ul li {
  cursor: pointer;
}
.view{
  padding: 0 200px;
}

#nav .router-link-exact-active {
  font-weight: bold;
}
</style>
