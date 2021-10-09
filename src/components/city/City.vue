<template>
  <div class="city">
    <city-header></city-header>
    <!-- <city-hot></city-hot> -->
    <!-- <city-sort :cityList='cityList'></city-sort> -->
    <city-list 
    :hotCityList='hotCityList'
    :cityList='cityList'
    ></city-list>
  </div>
</template>

<script>
import CityHeader from './pages/Header.vue'
// import CityHot from './pages/Hot.vue'
// import CitySort from './pages/Sort.vue'
import CityList from './pages/List.vue'

  export default{
    components:{
        CityHeader,
        // CityHot,
        // CitySort,
        CityList,
    },

    // 要有一个数据去给他执行什么事
    data(){
        return{
            hotCityList:[],
            cityList:[]
        }
    },
    mounted(){
        this.$http.get('/api/allcity.json').then((res)=>{
            let data = res.data;
            this.hotCityList=data.hotCityList;
            this.cityList=data.cityList;
        })
    }
  }
</script>

<style scoped>
.city {
  background: #f5f5f5;
}
</style>
