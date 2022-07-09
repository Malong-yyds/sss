<template>
  <a-layout class="layout">
    <a-layout-header class="head" >
      <div class="logo" >
        <span>报刊阅读平台</span>
      </div>
      <div style="float:right;color:#fff;fontSize:large">
        <bell-outlined />     通知</div>
      <!-- <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu> -->
    </a-layout-header>

   
  </a-layout>
</template>
<script lang="">
import {BellOutlined } from '@ant-design/icons-vue';
import { defineComponent,  ref, } from 'vue';
export default defineComponent({
components:{
    BellOutlined,
    
},
  setup() {
    return {
      selectedKeys: ref(['2']),
    };
  },
});
</script>
<style>

/* #components-layout-demo-top */
 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  color: aliceblue;
  /* padding-bottom: 2px; */
  /* background: rgba(255, 255, 255, 0.3); */
  display: flex;
  align-items:center;
  justify-content: center;  
}
/* .ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
} */

[data-theme='dark'] .site-layout-content {
  background: #141414;
}

.head{
    background-image: linear-gradient(to right, rgb(13, 52, 137), rgb(47, 125, 227));
 
}

</style>
