<template>
  <div class="wrapper">
    <h1>示例1</h1>
    <div class="content">
      <Tabs v-model:selected="title">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';
  import {ref} from 'vue';

  export default {
    components: {Tab, Tabs},
    setup() {
      const title = ref('导航1');
      return {title};
    }
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    .content {
      background: white;
    }
  }
</style>
