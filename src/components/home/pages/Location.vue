<template>
  <div class="location border-top">
      <div class="location-item border-right">
          <span class="iconfont">&#xe632;</span>
          北京大兴
      </div>
      <div class="location-item">
          <span class="iconfont">&#xe642;</span>
          玩水季
      </div>
  </div>
</template>
 
<script>
  export default{
    name: '' 
  }
</script>
  
<style scoped>
.location{
    position: relative;
    display: flex;
    background: #fff;
}
.location .location-item{
    flex: 1;
    font-size: .28rem;
    text-align: center;
    line-height: 1rem;
}
</style>