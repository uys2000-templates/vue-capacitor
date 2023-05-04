<template>
  <div>
    <div>App</div>
    <router-view />
  </div>
</template>

<script>
import { getAppInfo } from './capacitor/app';


export default {
  name: 'App',
  mounted() {
    getAppInfo().then(res => console.log(res))
  },
}
</script>
