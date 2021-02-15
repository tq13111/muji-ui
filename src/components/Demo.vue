<template>
  <div class="demo ">
    <h2>{{ component['__sourceCodeTitle'] }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions ">
      <Button @click="codeVisible = !codeVisible">查看代码</Button>
    </div>
    <div v-if="codeVisible" class="demo-code">
        <pre class="language-html"
             v-html="html"></pre>
    </div>
  </div>
</template>
<script lang="ts">
  import Button from '../lib/Button.vue';
  import 'prismjs';
  import 'prismjs/themes/prism-okaidia.css';
  import {ref} from 'vue';

  const Prism = (window as any).Prism;

  export default {
    props: {
      component: {
        type: Object,
        required: true
      },
    },
    components: {Button},
    setup(props: { component: { __sourceCode: string } }) {
      const html = Prism.highlight(props.component['__sourceCode'], Prism.languages.html, 'html');
      const codeVisible = ref(false);
      return {Prism, html, codeVisible};
    }
  };
</script>
<style lang="scss" scoped>
  $border-color: #d9d9d9;


  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }

    &-component {
      padding: 16px;
      background: #eee;

    }

    &-actions {
      padding: 8px 16px;
    }

    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;

      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
</style>

