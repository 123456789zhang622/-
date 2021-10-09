<template>
  <div class="header">
    <div class="header-left" @click="toHome">
      <span class="iconfont">
        &#xe624;
      </span>
    </div>
    <div class="header-title">
        城市选择
    </div>
  </div>
</template>
 
<script>
export default {
    methods:{
        toHome(){
            this.$router.push('/')
        }
    }
};
</script>
  
<style scoped lang="stylus">
@import "~@/assets/css/var.styl"

.header{
  width:100%;
  height:.8rem;
  background: $bgColor;
  color: #fff;
  font-size:.32rem;
  position:relative;
}

.header-left{
  width:.4rem;
  padding:.2rem;
  text-align: center;
  font-weight: bold;
  position:absolute;
}

.header-title{
  text-align:center;
  padding:.2rem
}
</style>