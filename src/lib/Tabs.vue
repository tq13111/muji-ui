<template>
  <div class="muji-tabs">
    <div class="muji-tabs-nav">
      <div v-for="(item,index) in titles"
           :key="index"
           :class="{selected:item === selected}"
           class="muji-tabs-nav-item"
           @click="$emit('update:selected',item)">
        {{ item }}
      </div>
    </div>
    <div class="muji-tabs-content">
      <component :is="item" v-for="(item,index) in defaults" :key="index"/>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';

  export default {
    props: {
      selected: {
        type: String,
      }
    },
    setup(props, context) {
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs子标签必须是Tab');
        }
      });
      const titles = defaults.map(tag =>
        tag.props.title
      );
      return {defaults, titles};
    }
  };
</script>
<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;

  .muji-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
