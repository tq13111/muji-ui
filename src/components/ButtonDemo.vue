<template>
  <div>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
    <h1>示例2</h1>
    <Button>普通</Button>
    <Button size="small">小小小</Button>
    <Button size="big">大大大</Button>
    <h1>示例3</h1>
    <Button>你好</Button>
    <Button level="main">你好</Button>
    <Button level="danger">你好</Button>
    <h1>示例4</h1>
    <Button>你好</Button>
    <Button disabled>你好</Button>
    <Button disabled theme="link">你好</Button>
    <Button disabled theme="text">你好</Button>
  </div>
</template>
<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    components: {Button},
    setup() {
      const onClick = () => {
      };
      return {onClick};
    }
  };
</script>
<style lang="scss" scoped>

</style>
