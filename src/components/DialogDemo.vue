<template>
  <div>
    <div>Dialog 示例</div>
    <div class="wrapper">
      <h1>普通</h1>
      <div class="content">
        <Button @click="visibleToggle">toggle</Button>
        <Dialog v-model:visible="visible" :cancel="f2" :close-on-click-overlay="false" :ok="f1"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    components: {Button, Dialog},
    setup() {
      const visible = ref(false);
      const visibleToggle = () => {
        visible.value = !visible.value;
      };
      const f1 = () => {
        console.log(1);
      };
      const f2 = () => {
        console.log(2);
      };
      return {visible, visibleToggle, f1, f2};
    }
  };
</script>
<style lang="scss" scoped>

</style>

