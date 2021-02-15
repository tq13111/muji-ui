<template>
  <div>
    <Demo :component="Tabs1Demo"/>
  </div>
</template>
<script lang="ts">
  import Tabs1Demo from './Tabs1.demo.vue';

  export default {
    setup() {
      return {Tabs1Demo};
    }
  };
</script>
