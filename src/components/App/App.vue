<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { AppTS } from '@/components/App/AppTS.ts';
export default class App extends AppTS {}
</script>

<style lang="scss">
@import url('../../components/App/App.scss');
</style>
