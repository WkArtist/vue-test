<template>
  <div class="academic">
      <ul class="question">
          <router-link tag="li" :to= "{name: 'question', params: {id: 201901}}" >到底什么是es6中的class（类）？怎么实现class（类）？</router-link>
          <router-link tag="li" :to= "{name: 'question', params: {id: 201902}}">什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？</router-link>
          <router-link tag="li" :to= "{name: 'question', params: {id: 201903}}">什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？</router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .academic .question li {
        margin-bottom: 20px;
    }
</style>