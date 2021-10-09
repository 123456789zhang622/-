<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div style="height:2000px"></div>
  </div>
</template>
 
<script>
import DetailBanner from "./pages/Banner.vue"
import DetailHeader from "./pages/Header.vue"
  export default{
    components:{
      DetailBanner,
      DetailHeader
    },
    // 缓存自带的生命周期，强制性把界面放在头部
    activated(){
      document.documentElement.scrollTop = 0;
    }
  }
</script>
  
<style scoped>
  
</style>