<template>
  <div class="topNav">
    <span @click="toggleAside"></span>
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-steam"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleAside = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleAside};
    }
  };

</script>
<style lang="scss" scoped>
  $color: #18a79f;
  .topNav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    color: $color;

    > .logo {
      max-width: 6em;
      margin-right: auto;

      > svg {
        width: 34px;
        height: 34px;
      }
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      > li {
        margin: 0 1em;
      }
    }

    > span {
      display: none;
    }

    @media(max-width: 500px) {
      > .logo {
        margin: 0 auto;
      }

      > .menu {
        display: none;
      }

      > span {
        display: inline-block;
        background: blue;
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
