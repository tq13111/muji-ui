<template>
  <div class="wrapper">
    <Demo :component="Button1Demo" class="normal"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
  </div>
</template>
<script lang="ts">
  import Button1Demo from './Button1.demo.vue';
  import Button2Demo from './Button2.demo.vue';
  import Button3Demo from './Button3.demo.vue';
  import Button4Demo from './Button4.demo.vue';
  import Button5Demo from './Button5.demo.vue';

  export default {
    setup() {
      const onClick = () => {
      };
      return {onClick, Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
    }
  };
</script>
<style lang="scss" scoped>
  ::v-deep(.demo-component) {
    > div {
      margin-bottom: 16px;

    }
  }
</style>
