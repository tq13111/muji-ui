<demo>
禁用
</demo>
<template>
  <Button disabled>禁用按钮</Button>
  <Button class="background" disabled theme="text">你好</Button>
  <Button class="background" disabled theme="link">你好</Button>
</template>
<script>
  import {Button} from '../lib/index'

  export default {
    components: {
      Button
    },
  }
</script>

