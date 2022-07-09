<template>
    <top></top>
    <a-layout class="layout">
  <a-layout-content style="padding: 30px 50px">
  <div :style="{ background: '#fff', padding: '24px', minHeight: '587px', textAlign:'left' }">
  <a-row>
       <a-col class="col1">我的课程</a-col>
       <a-col  class="col2" >{{coursename}}</a-col>
  </a-row>

    <a-space direction="horizontal">
            <!-- v-for -->
         <a-card class="card" >
          
             <a-button  @click="$router.push({
              name:'resources'
             
             })">我的资源</a-button>
              <p>Card content</p>
             
         </a-card>
         <a-card  class="card"  >
             <a-button  @click="$router.push({
              name:'homework'
           
             })">我的作业</a-button>
                <p>Card content</p>
                 
         </a-card>
          <a-card  class="card"  >
             <a-button  @click="enterhomework">我的作业2</a-button>
                <p>Card content</p>
                 
         </a-card>
    </a-space>

   </div>    

  </a-layout-content>
    <a-layout-footer style="text-align: center">
      <!-- Ant Design ©2018 Created by Ant UED -->
    </a-layout-footer>
     </a-layout>
</template>
<script lang="">
import { defineComponent,ref} from 'vue';
import top from '../../components/top.vue';
import {useRouter} from 'vue-router';

export default defineComponent ({
    components:{
        top,
    },
    setup(){
        const coursename= ref('数据库');
 const go=useRouter();
    const enterhomework = () => {
        console.log(coursename.value);
        go.push('../course/homework/index.vue');
        // console.log($route)
    }


        return{
            coursename,
            enterhomework,
        }
    }
})
</script>

<style scoped>
.layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
</style>