<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
#app{
  min-width : 1600px;
  font-family: 'Noto Sans KR', sans-serif !important;
}
</style>
