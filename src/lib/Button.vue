<template>
  <button class="muji-button" :class="'theme-'+ theme">
    <slot/>
  </button>
</template>
<script lang="ts">
  export default {
    props: {
      theme: {
        type: String,
        default: 'button'
      },
    },
  };
</script>
<style lang="scss" scoped>
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .muji-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    & + & { //选中后面的兄弟元素
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }
  }
</style>
