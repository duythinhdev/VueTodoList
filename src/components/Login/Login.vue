<template lang="html">
  <div class="background">
      <form class="formlogin"  @submit="event.preventDefault()">
        <div class="formLogin-title">
          <p >Đăng nhập vào Trello</p>
        </div>
        <div class="formlogin-email">
          <input type="text"
                 name="email"
                 class="formlogin-email__inputemail"
                 placeholder=" Nhập Email"
                 v-model="username"
          />
        </div >
        <div class="formlogin-password">
          <input type="password"
                 name="password"
                 class="formlogin-password__inputpassword"
                 placeholder=" Nhập Password"
                 v-model="password"
          />
        </div>
        <div class="formlogin-signUp">
          <button
              class="formlogin-signUp__button">
            Đăng Nhập</button>
        </div>
        <div class="formlogin-text">
          <p class="formlogin-text__or">Hoặc</p>
        </div>
        <div class="formlogin-with">
            <button class="formlogin-with__google">
              Tiếp Tục Với Google
            </button>
        </div>
        <div class="formlogin-with">
          <button class="formlogin-with__Miro">
            Tiếp Tục Với Microsoft
          </button>
        </div>
        <div class="formlogin-with">
          <button class="formlogin-with__Apple">
            Tiếp Tục Với Apple
          </button>
        </div>
      </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    typescript(){

    }
  }
}
</script>

<style lang="scss">
@import "login.scss";
</style>
