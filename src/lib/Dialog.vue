<template>
  <template v-if="visible">
    <div class="muji-dialog-overlay" @click="onClickOverlay"></div>
    <div class="muji-dialog-wrapper">
      <div class="muji-dialog">
        <header>标题
          <span class="muji-dialog-close" @click="close"></span>
        </header>
        <main>
          <p>Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.</p>
          <p>xxx</p>
        </main>
        <footer>
          <Button @click="okFunction">OK</Button>
          <Button @click="cancelFunction">Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
  import Button from './Button.vue';

  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      ok: {
        type: Function,
      },
      cancel: {
        type: Function,
      }
    },
    components: {Button},
    setup: function (props, context) {
      const close = () => {
        context.emit('update:visible', !props.visible);
      };
      const onClickOverlay = () => {
        if (props.closeOnClickOverlay) {
          console.log(1333);
          close();
        }
      };
      const okFunction = () => {
        if (props.ok?.() !== false) {close();}
      };
      const cancelFunction = () => {
        if (props.cancel?.() !== false) {close();}
      };
      return {close, onClickOverlay, okFunction, cancelFunction};
    }
  };
</script>
<style lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;

  .muji-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
    min-width: 15em;
    max-width: 80%;

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 10;
    }

    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }

    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      font-weight: 400;
      color: rgba(0, 0, 0, .87);
    }

    > main {
      padding: 12px 16px;
      color: rgba(0, 0, 0, .6);

      > p {
        word-break: break-word;
      }
    }

    > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }

    &-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: black;
        width: 100%;
        top: 50%;
        left: 50%;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
</style>
