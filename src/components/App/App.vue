<template>
<!--  <img alt="Vue logo" src="">-->
  <div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <p>11111</p>
    <button @click="clickhandle" >handle typescript</button>
  </div>
</template>

<script lang="ts">
import { AppTS } from '@/components/App/AppTS.ts';
export default class App extends AppTS {}
</script>

<style lang="scss">
@import url('../../components/App/App.scss');
</style>
