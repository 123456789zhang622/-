<template>
  <div class="header">

    <div class="header-return"
    v-show="showHeader">
      <span class="border-return"></span>
      <span class="iconfont return" @click="toHome">&#xe624;</span>
    </div>

    <!-- 和上面是同级的，经过一个判断，什么时候显示/隐藏 -->
    <div class="header-top"
    v-show="!showHeader"
    :style="styleOpacity">
      <div class="header-left">
        <span class="iconfont" @click="toHome">
          &#xe624;
        </span>
      </div>
       北京国际鲜花港
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            showHeader:true,
            styleOpacity:{
                opacity:0
            }
        }
    },
    methods:{
        toHome(){
            this.$router.push("/")
        }
    },
    mounted(){
        let That = this
        window.addEventListener("scroll",function(){
            // console.log(document.documentElement.scrollTop)
            let top = document.documentElement.scrollTop;
            if(top>43.20000076293945){
                // 上边框透明渐变效果
                let opacity = top/130;
                opacity=opacity>1 ? 1 : opacity
                That.styleOpacity={opacity}
                That.showHeader=false
            }else{
                That.showHeader=true
            }
        })
    }
};
</script>

<style scoped>
.header-return {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
}
.border-return {
  display: block;
  background: #000;
  width: 0.72rem;
  height: 0.72rem;
  opacity: 0.5;
  border-radius: 0.36rem;
}
.return {
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  width: 0.72rem;
  line-height: 0.72rem;
  text-align: left;
  text-indent: 0.18rem;
  font-size: 0.32rem;
  font-weight: bold;
}
.header-top{
    z-index: 99;
    position: fixed;
    top: 0;
    text-align: center;
    width: 100%;
    line-height: .88rem;
    background:#00bcd4;
    color: #fff;
    font-size: .36rem;
}
.header-left{
    position: absolute;
    left: 0;
    width: .4rem;
    padding:0 .2rem;
    text-align: center;
    font-weight: bold;
}
</style>
