<template>
  <div>
    <h2>This is Home page</h2>
    <MyText />
    <NuxtLink to="/about">About page</NuxtLink>
    <MyButton :parent-class="'costomBtn'" :on-click="myClick" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MyButton from '../components/atoms/MyButton.vue'
import MyText from '../components/atoms/MyText.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    MyButton,
    MyText
  },
  methods: {
    myClick() {
      // console.log('MyButton Clickd !!!');
    }
  }
})
</script>

<style>
.costomBtn {
  color: white;
}
</style>