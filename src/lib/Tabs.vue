<template>
  <div class="muji-tabs">
    <div class="muji-tabs-nav">
      <div v-for="(item,index) in titles"
           :ref="el => { if (el) items[index] = el }"
           :key="index"
           :class="{selected:item === selected}"
           class="muji-tabs-nav-item"
           @click="$emit('update:selected',item)">
        {{ item }}
      </div>
      <div ref="indicator"
           class="muji-tabs-nav-indicator"></div>
    </div>
    <div class="muji-tabs-content">
      <component :is="current" :key="selected"/>
    </div>
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue';
  import {computed, ref, onMounted} from 'vue';

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
      const items = ref<HTMLDivElement[]>([]);
      const indicator = ref(null);
      onMounted(() => {
        const divs = items.value;
        const result = divs.filter((div) =>
          div.classList.contains('selected')
        )[0];
        const {width} = result.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
      });
      return {defaults, titles, current, items, indicator};
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
        left: 0;
        bottom: -1px;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>
