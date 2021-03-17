<template>
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
</template>


<script>
export default {
  name:'MainBody'
}
</script>

<style lang="scss">
@import "MainBody.scss";
</style>
