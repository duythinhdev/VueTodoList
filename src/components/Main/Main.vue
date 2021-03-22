<template lang="html">
  <div class="background--Main">
      <MainHeader />
      <MainBody />
      <MainFooter />
  </div>
</template>

<script lang="ts">
import MainHeader from "@/components/Main/MainHeader/MainHeader.vue";
import MainBody from "@/components/Main/MainBody/MainBody.vue";
import MainFooter from "@/components/Main/MainFooter/MainFooter.vue";
export default {
  name:"main",
  components: {
    MainHeader,
    MainBody,
    MainFooter
  },
  data(){
    return {
    }
  }
};
</script>
<style lang="scss">
@import "Main.scss";
</style>
