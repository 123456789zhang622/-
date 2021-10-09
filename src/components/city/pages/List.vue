<template>
  <!-- 下面嵌套两层div盒子 -->
  <div ref="wrapper" class="container">
    <div class="content">
      <!-- 把组件放在一起绑定在一起，从而实现顶部不变而下列表循环 -->
      <!-- hot  -->
      <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
          <li class="hot-item" v-for="item in hotCityList" :key="item.id"
          @click="changeCityName(item.cityName)">
            {{ item.cityName }}
          </li>
        </ul>
      </div>

      <!-- sort  -->
      <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
          <li class="sort-item" v-for="item in cityList" :key="item.id"
           @click="changeSort(item.id)">
            {{ item.title }}
          </li>
        </ul>
      </div>

      <!-- list -->
      <div class="list">
        <div v-for="item in cityList" :key="item.id"
        ref="cityList"
        > <!-- 绑定ref进行操作，加冒号是循环的-->
          <div class="list-title">
            {{ item.title }}
          </div>
          <ul class="list-msg">
            <li class="list-item" v-for="item in item.lists" :key="item.id"
            @click="changeCityName(item)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入
import { mapMutations } from "vuex"
import BScroll from "better-scroll";

export default {
  props: ["hotCityList", "cityList"],
  data() {
    //   空数组
    return {
      scroll: ""
    }
  },
  mounted() {
    //   作为一个数据引入,括号内是一个DOM节点，要使用的话需要套两层盒子
    // console.log(this.$refs['container']);
    let container = this.$refs['wrapper'];
    this.scroll = new BScroll(container, { observeDOM: true });
    // this.scroll = new BScroll(this.$refs.wrapper, { observeDOM: true });
  },
//   事件实现点击字母跳转
 methods: {
    ...mapMutations(['changeCity']),
    changeSort (choosedSort) {
    // 一级的表达式Goods 
    // 二级表达式 Goods.name
    // 三级级表达式 Goods.columns[0]容易出问题
    // 因为Goods.columns开始就是undefined,没有解析
    // scrollToElement滚动到某个位置
      this.scroll.scrollToElement(this.$refs.cityList[choosedSort - 1], 600);
    },
    changeCityName (city) {
    //   console.log(localCity);
      console.log(city);
    // 改变首页城市
      this.changeCity(city);
    //   回到首页
      this.$router.push("/");
    }
  },
};
</script>

<style scoped lang='stylus'>
@import '~@/assets/css/common.styl';

// 给container定位
.container{
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    top: .86rem;
    background: #f5f5f5;
}


// sort
.sort-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}
.sort-list {
  position: relative;
  overflow: hidden;
  background: #fff;
  font-size: 0.28rem;
  color: #212121;
}
.sort-item {
  width: 16.66666%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
}


// hot
.hot-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}
.hot-list {
  position: relative;
  overflow: hidden;
  background: #fff;
  font-size: 0.28rem;
  color: #212121;
}
/* 添加一个虚拟标签，实现添加束划线 */
.hot-list::before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33.33333%;
  left: 33.33333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}
.hot-item {
  position:relative;
  width: 33.33333%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd; /* 下划线 */
}


// list
.list-title{
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}
.list-msg{
    background: #fff;
    position: relative;
    overflow: hidden;
}
/* 添加一个虚拟标签，实现添加束划线 */
.list-msg::before{
    content: " ";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.list-msg::after{
    content: " ";
    position: absolute;
    height: 100%;
    width: 0%;
    left: 75%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}
.list-item{
  position:relative;
   width: 25%;
   font-size: .28rem;
   text-align: center;
   line-height: .9rem;
   float: left;
   border-bottom:.02rem solid #ddd;/* 下划线 */
   textOverflow();
}
</style>
