<template>
  <div class="topNav">
    <span @click="toggleAside"></span>
    <div class="logo">LOGO</div>
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
  .topNav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;

    > .logo {
      max-width: 6em;
      margin-right: auto;
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
      display: flex;
      justify-content: center;
      align-items: center;

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
