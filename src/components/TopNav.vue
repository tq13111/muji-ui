<template>
  <div class="topNav">
    <svg v-if="toggleAsideButtonVisible" class="icon" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <router-link class="logo" to="/">
      <svg class="icon">
        <use xlink:href="#icon-steam"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    props: {
      toggleAsideButtonVisible: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleAside = () => {
        asideVisible!.value = !asideVisible!.value;
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

    > svg {
      display: none;
    }

    @media(max-width: 500px) {
      > .logo {
        margin: 0 auto;
      }

      > .menu {
        display: none;
      }


      > svg {
        display: inline-block;
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
