<template>
  <div>
    <div class="wrapper">
      <h1>普通</h1>
      <div class="content">
        <Button @click="showDialog">toggle</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {openDialog} from '../lib/openDialog';

  export default {
    components: {Button, Dialog},
    setup() {
      const showDialog = () => {
        openDialog({
          title: '我是标题',
          content: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
          closeOnClickOverlay: true,
          ok() {
            console.log(1);
            return true;
          },
          cancel() {
            console.log(2);
            return true;
          }
        });
      };
      return {showDialog};
    }
  };
</script>
<style lang="scss" scoped>

</style>

