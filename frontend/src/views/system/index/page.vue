<template>
  <d2-container class="page">
    <div class="welcome">
      <div class="title">{{ $t("views.system.index.welcome.title")}}</div>
      <div class="desc">{{ $t("views.system.index.welcome.desc")}}</div>
    </div>
  </d2-container>
</template>

<script>
import D2Badge from './components/d2-badge'
import D2Help from './components/d2-help'
import D2PageCover from './components/d2-page-cover'
export default {
  components: {
    D2Badge,
    D2Help,
    D2PageCover
  },
  data () {
    return {
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .welcome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .title {
      font-size: 2rem;
    }
    .desc {
      font-size: 1.5rem;
      color: #333;
    }
  }
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
