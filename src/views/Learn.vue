<template>
  <div class="learn">
    {{courseName}}{{coursePrice}} <button @click="changePrice">改变</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
  computed: {
    ...mapState('learn',['courseName']),
    ...mapGetters('learn',['coursePrice'])
  },
  methods: {
    changePrice() {
      this.$store.commit('learn/changePrice',{price: 20});
    }
  }
}
</script>

<style>
  .learn{
    margin-top: 20px;
  }
</style>