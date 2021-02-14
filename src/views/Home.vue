<template>
  <div>
    <div class="wrapper">
      <TopNav/>
      <div class="banner">
        <h1>慕积 UI</h1>
        <h2>一个炫酷的 UI 框架</h2>
        <p class="actions">
          <a href="">GtiHub</a>
          <router-link href="" to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-typescript"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';

  export default {
    components: {TopNav}
  };
</script>

<style lang="scss" scoped>
  $green: #02bcb0;
  $border-radius: 20px;
  $color: #18a79f;
  .wrapper {
    background: linear-gradient(135deg, rgba(227, 255, 253, 1) 0%, rgb(135, 227, 222) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
  }

  .features {
    > svg {
      width: 64px;
      height: 64px;
    }

  }

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: $green;
        color: white;
        display: inline-block;
        border-radius: $border-radius;
        padding: 8px 24px;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>
