<template>
  123
  <div class="layout">
    <TopNav class="nav" toggleAsideButtonVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';
  import {inject, Ref} from 'vue';

  export default {
    components: {TopNav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      return {asideVisible};
    }
  };
</script>
<style lang="scss" scoped>
  $color: #30cfc6;
  $border-color: #d9d9d9;
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    > .nav {
      flex-shrink: 0;
      background: white;
      padding: 10px 16px;
      box-shadow: rgb(0 0 0 / 30%) 0px 0px 2px;

    }


    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    > aside {
      flex-shrink: 0;
    }

    > main {
      flex-grow: 1;
      padding: 16px;
    }
  }

  aside {
    background: lightblue;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;

    > h2 {
      margin-bottom: 4px;
      padding: 0 16px;
    }

    > ol {
      margin-bottom: 12px;

      > li {
        > a {
          display: block;
          padding: 4px 16px;
        }

        .router-link-active {
          display: block;
          color: $color;
          background: white;
          font-weight: bold;
        }
      }
    }
  }

  main {
    overflow: auto;
  }



  :deep(.background) {
    background: inherit;
  }
</style>
