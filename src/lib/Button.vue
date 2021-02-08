<template>
  <div :size="size">
    <button v-bind="xxx">
      <slot/>
    </button>
  </div>
</template>
<script lang="ts">
  export default {
    inheritAttrs:false,
    setup(props, context) {
      const {size, ...xxx} = context.attrs;
      return {size, xxx};
    }
  };
</script>
<style lang="scss" scoped>
  div {
    width: 100%;
    border: 1px solid;
  }
</style>
