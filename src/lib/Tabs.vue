<template>
  <div class="muji-tabs">
    <div ref="container" class="muji-tabs-nav">
      <div v-for="(item,index) in titles"
           :ref="el => { if (item ===selected) { selectedDiv = el} }"
           :key="index"
           :class="{selected:item === selected}"
           class="muji-tabs-nav-item"
           @click="$emit('update:selected',item)">
        {{ item }}
      </div>
      <div ref="indicator"
           class="muji-tabs-nav-indicator">
      </div>
    </div>
    <div class="muji-tabs-content">
      <component :is="current" :key="selected"/>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';
  import {computed, ref, onMounted, onUpdated} from 'vue';

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
      const current = computed(() => {
        return defaults.filter((item) => {
          return item.props.title === props.selected;
        })[0];
      });
      const selectedDiv = ref<HTMLDivElement>(null);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);
      const x = () => {
        const {width, left} = selectedDiv.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: containerLeft} = container.value.getBoundingClientRect();
        indicator.value.style.left = left - containerLeft + 'px';
      };
      onMounted(x);
      onUpdated(x);
      return {defaults, titles, current, selectedDiv, indicator, container};
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
      position: relative;

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

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        bottom: -1px;
        transition: all 1s;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
