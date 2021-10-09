<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">
        &#xe624;
      </span>
    </div>
    <div class="header-search">
      <span class="iconfont">
        &#xe632;
      </span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right" @click="toCity">
      <!-- 跳转界面的两种路由方法，一个使click点击事件，
      一个是使用<router-link to="/city">方法 -->
      <!-- <router-link to='/city'> -->
      {{city}}<span class="iconfont">
        &#xeb6d;
      </span>
      <!-- </router-link> -->
    </div>
  </div>
</template>
 
<script>
// 此处mapstate就是vuex仓库中state
import { mapState } from 'vuex'

export default {
  computed:{
    ...mapState(['city'])
  },
  methods:{
    // 实现点击事件
    toCity(){
      this.$router.push("/city")
    }
  }
};
</script>
  
<style scoped lang="stylus">
@import "~@/assets/css/var.styl"
.header {
  width: 100%;
  height: .88rem;
  background: $bgColor;
  color: #fff;
  font-size: 0.36rem;
  display: flex;
}

.header-left {
  width: .4rem;
  padding:.2rem;
  text-align: center;
  font-weight: bold;
}

.header-search{
    flex: 1;
    background: #fff;
    height:.6rem;
    margin:.12rem 0;
    border-radius:.1rem;/*圆角边框 */
    color: #e4e7ea;
    line-height: .6rem;
    font-size:.28rem;
    padding-left:.2rem;
}

.header-right{
    font-size: .28rem;
    padding: .2rem;
    padding-top: .25rem;
}
.header-right a{
  color:#fff;
}
</style>