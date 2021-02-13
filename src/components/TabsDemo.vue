<template>
  <div class="wrapper">
    <h1>示例1</h1>
    <div class="content">
      <Tabs>
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
      </Tabs>
    </div>
  </div>
</template>
<script lang="ts">
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';

  export default {
    components: {Tab, Tabs}
  };
</script>
<style lang="scss" scoped>
  .wrapper {
    .content {
      background: white;
    }
  }
</style>
