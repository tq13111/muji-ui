<template>
  <div>
    <div>Dialog 示例</div>
    <div class="wrapper">
      <h1>普通</h1>
      <div class="content">
        <header>标题</header>
        <main>
          <p>xxx</p>
          <p>yyy</p>
        </main>
        <footer>
          <Button>OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>

    <Dialog/>
  </div>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';

  export default {
    components: {Button, Dialog}
  };
</script>
<style lang="scss" scoped>

</style>

