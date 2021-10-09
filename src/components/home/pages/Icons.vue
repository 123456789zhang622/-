<template>
  <div class="icons">

    <swiper :options="swiperOption">
      <swiper-slide v-for='item in page'
      :key="item.id">

        <div class="icons-item"
         v-for='page in item'
         :key="page.id">
          <img :src="page.imgUrl">
          <p>{{ page.title }}</p> 
        </div>

      </swiper-slide>
      
      <!-- 滑动点 -->
      <!-- <div 
        class="icons-pagination"
        slot="pagination"
      ></div> -->

    </swiper>
    
  </div>
</template>
 
<script>
export default {
  // 设置props去让组件接收
    props:['iconsList'],
  data() {
    return {
      swiperOption:{},

    //   滑动点设置
    //   swiperOption: {
    //     pagination: {
    //       el: ".icons-pagination",
    //     },
    //     loop: true,
    //   },

    };
  },

// 计算属性
  computed:{
      page(){
          let pages = [];

        //   循环遍历数组,index就是0-9个数据
          this.iconsList.forEach((item,index)=>{
            //   定义一个变量除以8，数为0则放入第一个swiper，为1则放入第二个swiper
              let idx = Math.floor(index / 8);
              if(!pages[idx]) pages[idx]=[];
              pages[idx].push(item)
          })

          return pages;
      }
  }
};
</script>
  
<style scoped lang='stylus'>
@import '~@/assets/css/common.styl';
.icons {
  width: 100%;
  overflow: hidden;
  background: white;
}
.icons-item {
  width: 25%;
  padding-bottom: 25%; /*防止掉块 */
  height: 0;
  float: left; /*添加浮动，使图标在一行 */
}
.icons-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.icons-item p {
  padding-top: 0.1rem;
  font-size: 0.28rem;
  text-align: center;
  color: #212121;
  textOverflow();
}
/* .icons >>> .icons-pagination-bullet-active {
  background: #00bcd4;
} */
</style>