<template lang="html">
  <div class="background-signUp">
    <form class="formlogin" @submit="$event.preventDefault()" >
      <div class="formLogin-title">
        <p >Đăng Ký Với Trello</p>
      </div>
      <div class="formlogin-email">
        <input type="email"
               name="email"
               class="formlogin-email__inputemail"
               placeholder=" Nhập Email"
               v-model="formItems.email"
               @change="onchange()"
        />
      </div >
      <div class="formlogin-password">
        <input type="password"
               name="password"
               class="formlogin-password__inputpassword"
               placeholder=" Nhập Password"
               v-model="formItems.password"
               @change="onchange()"
        />
      </div>
      <div class="formlogin-password">
        <input type="password"
               name="password"
               class="formlogin-password__inputpassword"
               placeholder=" Nhập lại Password"
        />
      </div>
      <div v-if="this.flag === true">
        <Loading />
      </div>
      <div class="formlogin-signUp">
        <button
            @click="signUp"
            type="submit"
            class="formlogin-signUp__button">
          <RouterLink to="/" >Đăng Ký</RouterLink></button>
      </div>
    </form>
  </div>
</template>
<script>
import { SignUpTS } from "@/components/signUp/SignUpTS.ts";
export default class SignUp extends SignUpTS {}
</script>
<style lang="scss">
@import "SignUp.scss";
</style>
