<template lang="html">
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
</template>
<script lang="ts">
export default  {
  name:'MainHeader',
}
</script>
<style lang="scss" scoped >
  @import "MainHeader.scss";
</style>
