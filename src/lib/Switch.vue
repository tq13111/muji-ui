<template>
  <button
    :class="{ 'muji-checked': checked }"
    class="muji-switch"
    @click="toggle"
  >
    <span></span>
  </button>
</template>
<script lang="ts">
  export default {
    props: {
      checked: Boolean,
    },
    setup(props: { checked: boolean }, content: { emit: Function }) {
      const toggle = () => {
        content.emit('update:checked', !props.checked);
      };
      return {toggle};
    },
  };
</script>
<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .muji-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h/2;
      transition: left 0.25s;
    }

    &.muji-checked {
      background: #1890ff;

      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

    &:focus {
      outline: none;
    }

    &:active {
      > span {
        width: $h2 + 4px;
      }
    }

    &.muji-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>
