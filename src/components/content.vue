<template>
  <a-layout class="layout">
  
    <a-layout-content style="padding: 0 50px">
       <a-breadcrumb style="margin: 16px 0">
        
        <a-breadcrumb-item>我的课程</a-breadcrumb-item>
        <!-- <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item> -->
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '587px', textAlign:'left' }">


      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <!-- Ant Design ©2018 Created by Ant UED -->
    </a-layout-footer>
  </a-layout>
</template>
<script lang="">
import { defineComponent,  ref } from 'vue';
export default defineComponent({

  setup() {


    return {
    

    };
  },
});
</script>
<style>
.layout-content {
  min-height: 587px;
  padding: 24px;
  background: #fff;
}
/* #components-layout-demo-top */
[data-theme='dark'] .site-layout-content {
  background: #141414;
}

.card{
    width: 300px;
    color: #7994d6;
    margin: 8px;
}
</style>
