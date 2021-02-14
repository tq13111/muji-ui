<template>
  <div class="wrapper">
    <h1>主题</h1>
    <div class="content">
      <Button>你好</Button>
      <Button class="background" theme="link">你好</Button>
      <Button class="background" theme="text">你好</Button>
    </div>
    <h1>大小</h1>
    <div class="content">
      <div>
        <Button size="big">大大大</Button>
        <Button>普通</Button>
        <Button size="small">小小小</Button>
      </div>
      <div>
        <Button class="background" size="big" theme="text">大大大</Button>
        <Button class="background" theme="text">普通</Button>
        <Button class="background" size="small" theme="text">小小小</Button>
      </div>
      <div>
        <Button class="background" size="big" theme="link">大大大</Button>
        <Button class="background" theme="link">普通</Button>
        <Button class="background" size="small" theme="link">小小小</Button>
      </div>
    </div>
    <h1>级别</h1>
    <div class="content">
      <div>
        <Button>普通按钮</Button>
        <Button level="main">主要按钮</Button>
        <Button level="success">成功按钮</Button>
        <Button level="danger">危险按钮</Button>
        <Button level="warning">警告按钮</Button>
      </div>
      <div>
        <Button class="background" theme="text">普通文本</Button>
        <Button class="background" level="main" theme="text">主要文本</Button>
        <Button class="background" level="success" theme="text">成功文本</Button>
        <Button class="background" level="danger" theme="text">危险文本</Button>
        <Button class="background" level="warning" theme="text">警告文本</Button>
      </div>
      <div>
        <Button class="background" theme="link">普通链接</Button>
        <Button class="background" level="main" theme="link">主要链接</Button>
        <Button class="background" level="success" theme="link">成功链接</Button>
        <Button class="background" level="danger" theme="link">危险链接</Button>
        <Button class="background" level="warning" theme="link">警告链接</Button>
      </div>
    </div>
    <h1>禁用</h1>
    <div class="content">
      <Button disabled>禁用按钮</Button>
      <Button class="background" disabled theme="text">你好</Button>
      <Button class="background" disabled theme="link">你好</Button>
    </div>
    <h1>加载</h1>
    <div class="content">
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </div>
</template>
<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    components: {Button},
    setup() {
      const onClick = () => {
      };
      return {onClick};
    }
  };
</script>
<style lang="scss" scoped>

</style>
