<demo>
级别
</demo>
<template>
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
</template>
<script>
  import Button from '../lib/Button.vue'

  export default {
    components: {
      Button
    },
  }
</script>
