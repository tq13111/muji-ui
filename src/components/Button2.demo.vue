<demo>
大小
</demo>
<template>
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
</template>
<script>
  import {Button} from '../lib/index'

  export default {
    components: {
      Button
    },
  }
</script>
