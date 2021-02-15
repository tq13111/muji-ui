<template>
  <div>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>
<script lang="ts">
  import Switch1Demo from './Switch1.demo.vue';
  import Switch2Demo from './Switch2.demo.vue';

  export default {
    setup() {
      return {Switch1Demo, Switch2Demo};
    }
  };
</script>
