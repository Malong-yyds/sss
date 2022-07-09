<template>
  <a-layout class="layout">
  <top>hihihi</top>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        
        <a-breadcrumb-item></a-breadcrumb-item>
    
        <!-- <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item> -->
      </a-breadcrumb>
      
      <div :style="{ background: '#fff', padding: '24px', minHeight: '590px', textAlign:'left' ,width:'75%',float:'left'}">
     
         <a-row>
       <a-col class="col1">我的课程</a-col>
       <a-col  class="col2" ></a-col>
        </a-row>
        <a-space direction="horizontal">
            <!-- v-for -->
         <a-card  v-model:title="coursename"  class="card" >
          
             <a-button  @click="$router.push({
              name:'course'
             })">进入课程</a-button>
             
         </a-card>
         <a-card v-model:title="coursename" class="card"  >
                <p>Card content</p>
                 
         </a-card>
        </a-space>
       
      </div>
       <div :style="{ background: '#fff',  minHeight: '300px', padding:'24px',float:'right' ,width:'20%'}">
          <a-avatar :size="64">
              <template #icon><UserOutlined /></template>
          </a-avatar><br>
          <span style="padding:20px">{{usename}}</span>
            <div >
              <a-button @click="addCourse" :style="{margin:'10px'}"> 加入新班级 </a-button> 
      
         <!-- :footer="null" 底部按钮 -->
           <a-modal v-model:visible="visible" 
                    title="加入新班级"
                    @ok="handleOk" 
                    width="400px" 
                    centered 
                    cancelText="取消"
                    okText="确定">
            <a-form  ref="forms"> 
             <a-input v-model:value="invitationCode" 
                      placeholder="请输入班级邀请码" 
                      @pressEnter="handleOk" 
                      clearable>
             </a-input>
            </a-form>
  
            </a-modal>
            <a-button>退出登录</a-button>

           </div>

         
       </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <!-- Ant Design ©2018 Created by Ant UED -->
    </a-layout-footer>
  </a-layout>
</template>
<script lang="">
import top from '../../components/top.vue';
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent,  ref } from 'vue';
// import {Modal} from 'ant-design-vue';
// import {useRouter} from 'vue-router'
export default defineComponent({
    components:{
      top,
      UserOutlined,
    },
  // props:[formData],
    
  
  setup() {

 const coursename= ref('数据库');
//  const go=useRouter()
//     const enterCourse = () => {
//         console.log(coursename.value);
//         go.push('../course/index');
//     }
    const visible = ref(false);
    const invitationCode= ref();
    const addCourse = () => {
      visible.value = true;
      // modal.destroy()
     
    };
//     const modal = Modal.confirm();
// modal.destroy()
    const handleOk = () => {
    //  invitationCode=toRaw(invitationCode);
      console.log(invitationCode.value);
      visible.value = false;
      invitationCode.value='';
    };

    return {
      // selectedKeys: ref(['2']),
      //  enterCourse,
       coursename,
      addCourse,
      invitationCode,
      visible,
      handleOk,
   
      usename:'张三',
     

    };
  },
});
</script>
<style>
.layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
/* #components-layout-demo-top */
 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  /* padding-bottom: 2px; */
  background: rgba(255, 255, 255, 0.3);
}
/* .ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
} */

[data-theme='dark'] .site-layout-content {
  background: #141414;
}

.card{
    width: 300px;
    color: #7994d6;
    margin: 18px;
}
.col1{
background-color: rgb(72, 119, 220);
color: #fff;
margin-left: 18px;
width: 80px;
height: 38px;
 display: flex;
  align-items:center;
  justify-content: center;  

}

.col2{
background-color: #fff;
color: rgb(72, 119, 220);
width: 80px;
height: 38px;
border:2px solid rgb(72, 119, 220);
 display: flex;
  align-items:center;
  justify-content: center;  
}


</style>
