<template>
  <div>
    <div class="wrapper">
      <TopNav/>
      <div class="banner">
        <h1>慕积 UI</h1>
        <h2>一个炫酷的 UI 框架</h2>
        <p class="actions">
          <a href="">GtiHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
    margin: 64px auto;
    padding: 0 16px;
    @media (min-width: 800px) {
      width: 800px;
      padding: 0;
      > ul {
        > li {
          width: 50%;
        }
      }
    }

    @media (min-width: 1200px) {
      width: 1200px;
      padding: 0;

      > ul {
        > li {
          width: 33.3333%;
        }
      }
    }

    > ul {
      display: flex;
      flex-wrap: wrap;

      > li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas:
        "icon title"
        "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          grid-area: title;
          font-size: 28px;
        }

        > p {
          grid-area: text
        }
      }
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
