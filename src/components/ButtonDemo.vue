<template>
  <div>
    <Button size="small"
            @mouseover="onClick"
            @click="onClick">你好
    </Button>
  </div>
</template>
<script lang="ts">
  import Button from '../lib/Button.vue';

  export default {
    components: {Button},
    setup() {
      const onClick = () => {
        console.log(1);
      };
      return {onClick};
    }
  };
</script>
<style lang="scss" scoped>

</style>
