<demo>
常规
</demo>
<template>
  <Switch v-model:checked="bool"/>
</template>
<script>
  import {ref} from 'vue'
  import Switch from '../lib/Switch.vue'

  export default {
    components: {Switch},
    setup() {
      const bool = ref(false)
      return {bool}
    }
  }
</script>
