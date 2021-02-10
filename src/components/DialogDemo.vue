<template>
  <div>
    <div>Dialog 示例</div>
    <div class="wrapper">
      <h1>普通</h1>
      <div class="content">
        <Button @click="visibleToggle">toggle</Button>
        <Dialog :visible="visible"/>
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
      return {visible, visibleToggle};
    }
  };
</script>
<style lang="scss" scoped>

</style>

