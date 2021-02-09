<template>
  <button :class="classes"
          :disabled="disabled"
          class="muji-button">
    <span v-if="loading" class="muji-loadingIndicator"></span>
    <slot/>
  </button>
</template>
<script lang="ts">
  import {computed} from 'vue';

  export default {
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const {theme, size, level} = props;
      const classes = computed(() => {
        return {
          ['muji-theme-' + theme]: theme,
          ['muji-size-' + size]: size,
          ['muji-level-' + level]: level,

        };
      });
      return {classes};
    }

  };
</script>
<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #212168;
  $blue: #2196f3;
  $radius: 4px;
  $red: #ff4081;
  $grey: grey;
  $green: #4caf50;
  $yellow: #fdd835;

  .muji-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    &.muji-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 15%);
      }
    }

    &.muji-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 15%);;
      }
    }

    &.muji-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }

    &.muji-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }

    &.muji-theme-button {
      &.muji-level-main {
        background: $blue;
        color: white;
        border-color: $blue;

        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }

      &.muji-level-success {
        background: $green;
        color: white;
        border-color: $green;

        &:hover,
        &:focus {
          background: darken($green, 10%);
          border-color: darken($green, 10%);
        }
      }

      &.muji-level-danger {
        background: $red;
        border-color: $red;
        color: white;

        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }
      }

      &.muji-level-warning {
        background: $yellow;
        border-color: $yellow;
        color: white;

        &:hover,
        &:focus {
          background: darken($yellow, 10%);
          border-color: darken($yellow, 10%);
        }
      }
    }

    &.muji-theme-link {
      &.muji-level-main {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 15%);
        }
      }

      &.muji-level-success {
        color: $green;

        &:hover,
        &:focus {
          color: darken($green, 15%);
        }
      }

      &.muji-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 15%);
        }
      }

      &.muji-level-warning {
        color: $yellow;

        &:hover,
        &:focus {
          color: darken($yellow, 15%);
        }
      }

    }

    &.muji-theme-text {
      &.muji-level-main {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 15%);
        }
      }

      &.muji-level-success {
        color: $green;

        &:hover,
        &:focus {
          color: darken($green, 15%);
        }
      }

      &.muji-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 15%);
        }
      }

      &.muji-level-warning {
        color: $yellow;

        &:hover,
        &:focus {
          color: darken($yellow, 15%);
        }
      }
    }

    &.muji-theme-button {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;

        &:hover {
          border-color: $grey;
        }
      }
    }

    &.muji-theme-link, &.muji-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }

    > .muji-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: muji-spin 1s infinite linear;
    }

    @keyframes muji-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>

