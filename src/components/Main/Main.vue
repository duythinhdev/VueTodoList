<template lang="html">
  <div class="background--Main">
    <div class="main-header">
      <div class="main-header-one">
        <button class="main-header-one__button">
          iCon
        </button>
        <button class="main-header-one__button">
          iCon
        </button>
        <button class="main-header-one__button-table">
          Bảng
        </button>
        <div>
          <input type="text" class="main-header-one__input"/>
        </div>
      </div>
      <div class="main-header-two">
        <div class="main-header-two__Text">
          Trello
        </div>
      </div>
      <div class="main-header-three">
        <button class="main-header-three__sum">
          icon
        </button>
        <button  class="main-header-three__info">
          icon
        </button>
        <button class="main-header-three__notifi">
          icon
        </button>
        <div class="main-header-three__cirleAvatar">
        </div>
      </div>
    </div>
      <div class="main-body">
        <div class="main-body-one">
          <button class="main-body-one__btnName">Trello App</button>
          <button class="main-body-one__btnStart">Icon</button>
          <div class="main-body-one-PublicAndPrivate">
            <span class="main-body-one-PublicAndPrivate__borderlef"></span>
            <button class="main-body-one-PublicAndPrivate__Public">Cá Nhân</button>
            <span class="main-body-one-PublicAndPrivate__borderlef"></span>
            <button class="main-body-one-PublicAndPrivate__Public">Riêng Tư</button>
            <span class="main-body-one-PublicAndPrivate__borderlef"></span>
            <button class="main-body-one-PublicAndPrivate__Public">Mời</button>
          </div>
          <span class="main-body-one-PublicAndPrivate__Cycle">DD</span>
        </div>
        <div class="main-body-two">
          <button class="main-body-two__button">Tiện Ích bổ sung Lịch</button>
          <button class="main-body-two__button">Butler(7 tips)</button>
          <button class="main-body-two__button">Hiện Menu</button>
        </div>
      </div>
      <div class="main-footer">
        <div class="main-footer__menu">
        </div>
        <div class="main-footer__menu-add">
        </div>
      </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "main",
  components: {}
};
</script>
<style lang="scss">
@import "Main.scss";
</style>
