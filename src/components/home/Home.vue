<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"></home-like>
    <home-vacation :vacationList="vacationList"></home-vacation>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeHeader from "./pages/Header.vue";
import HomeSwiper from "./pages/Swiper.vue";
import HomeIcons from "./pages/Icons";
import HomeLocation from "./pages/Location.vue";
import HomeActivity from "./pages/Activity.vue";
import HomeHot from "./pages/Hot.vue";
import HomeVacation from "./pages/Vacation.vue";
import HomeLike from "./pages/Like.vue";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeVacation,
    HomeLike,
  },
  data() {
    // 返回是一个函数
    return {
      swiperList: [],
      iconsList: [],
      hotList: [],
      likeList: [],
      vacationList: [],
      // 记录值的一个数据
      changeCity:'',
    };
  },
  // 计算属性
  computed: {
    ...mapState(["city"])
  },
  methods:{
    getHttp(){
    // http://localhost:8080/dataHome.json
    // 转换成 /api/dataHome.json，图片也可以改成这个形式
      this.$http.get("/api/dataHome.json").then((res) => {
      const data = res.data.data;
      // console.log(data)
      data.forEach((item, index) => {
        if (item.city == this.city) {
          // console.log(item);
          this.swiperList = item.swiperList;
          this.iconsList = item.iconsList;
          this.hotList = item.hotList;
          this.likeList = item.likeList;
          this.vacationList = item.vacationList;
        }
      });
    });
    }
  },
  mounted() {
    // 把city值赋值给changecity
    this.changeCity = this.city
    this.getHttp()
  },
  // 使用keep-alive之后新增一个生命周期
  activated(){
    if(this.city != this.changeCity){
      // 当当前城市与改变城市不同时调用getHttp，并改变城市
      this.getHttp();
      this.changeCity = this.city
    }
  }
};
</script>

<style scoped>
.home {
  background: #f5f5f5;
}
</style>
