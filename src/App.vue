<template>
  <div id="app">

<!-- keep-alive优化请求（缓存机制），在数据没发生改变时，返回首页无需发送请求 -->
<!-- 把DOM元素驻留在内存中，防止DOM的重新渲染 -->
     <keep-alive>
       <router-view></router-view>
     </keep-alive>

  </div>
</template>

<script>
export default{
  name:'App'
}
</script>

<style>

</style>
