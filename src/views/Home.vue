<template>
  <div class="wrapper">
    <TopNav/>
    <div class="banner">
      <h1>慕积 UI</h1>
      <h2>一个炫酷的 UI 框架</h2>
      <p class="actions">
        <a href="">GtiHub</a>
        <router-link to="/doc" href="">开始</router-link>
      </p>
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
