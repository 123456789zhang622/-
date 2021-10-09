<template>
  <div class="activity border-top">

      <div class="activity-item border-right">
        <img src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png">
      </div>
      <div class="activity-item">
        <img src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png">
      </div>

  </div>
</template>
 
<script>
  export default{
    name: '' 
  }
</script>
  
<style scoped>
.activity{
    background: #fff;
    margin-top: .2rem;
    position: relative;
    display: flex;
}
.activity .activity-item{
    flex: 1;
    font-size: .28rem;
    text-align: center;
    line-height: 1rem;
    height: 1.4rem;
}
.activity .activity-item img{
    widows: 100%;
    height: 100%;
}
</style>