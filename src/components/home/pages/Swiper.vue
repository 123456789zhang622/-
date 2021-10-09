<template>
  <div class="header-swiper">
    <!-- ref="mySwiper" @someSwiperEvent="callback" -->

    <swiper :options="swiperOption">

      <swiper-slide 
      v-for='item in swiperList'
      :key="item.id">
        <img :src="item.imgeUrl">
      </swiper-slide>

      <div 
        class="swiper-pagination"
        slot="pagination"
      >
      </div>

    </swiper>   

  </div>
</template>
 
<script>
export default {
  // 设置props去让组件接收
  props:['swiperList'],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop:true,
      },
    };
  },
};
</script>
  
<style scoped lang='stylus'>
.header-swiper {
    background #ccc;
    height 0;
    padding-bottom: 26.67%;
// 防止因为网络原因掉块
//   width: 100%;
//   height: 2px;
}

.header-swiper img {
  width: 100%;
  height: 100%;
}

.header-swiper >>> .swiper-pagination-bullet-active {
  background: #00bcd4;
}
</style>