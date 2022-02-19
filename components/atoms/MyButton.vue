<template>
  <div>
    <button :class="['my-button', parentClass]" @click="onClick">My Button !!!</button>
  </div>
</template>

<script lang='ts'>
import Vue, {PropType} from 'vue'

export default Vue.extend({
  name: 'MyButton',
  props: {
    onClick: {type: Function as PropType<() => void> , required: true},
    parentClass: {type: String, required: true}
  },
  data() {
    return {
      // myClass: 'my-button',
    }
  },
  beforeCreate() {
    // console.log('MyButton Create');
  }
})
</script>

<style>
.my-button {
  background-color: pink;
}
</style>