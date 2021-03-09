<template>
  <div id="app">
    <component :is="currentWrapper"/>
  </div>
</template>

<script>
import DefaultWrapper from "./components/wrapper/DefaultWrapper";
import MenuWrapper from "./components/wrapper/MenuWrapper";
import MenuWhiteWrapper from "./components/wrapper/MenuWhiteWrapper";

export default {
  name: 'App',
  components:{
    DefaultWrapper,
    MenuWrapper,
    MenuWhiteWrapper
  },
  computed: {
    currentWrapper() {
      return this.$route.meta.wrapper || 'MenuWrapper'
    }
  },
}
</script>

<style lang="scss">
@import "./assets/scss/base.scss";

</style>
