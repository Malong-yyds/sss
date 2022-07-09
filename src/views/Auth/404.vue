<template>
  <a-result status="404" title="404" sub-title="对不起，找不到该页面!">
    <template #extra>
      <a-button type="primary" @click="handleBack"> Back {{ BtnText }}</a-button>
    </template>
  </a-result>
</template>
<script>
import { Result, Button } from "ant-design-vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
// import { useBack, useGo } from "../../utils/usePage";
// import { PageEnum } from "../../enum/pageEnum";
// import { PermissionStore } from "../../store/permission";
// import {useRouter} from "vue-router";
export default defineComponent({
  components: {
    "a-result": Result,
    "a-button": Button,
  },
  setup() {
    const BtnText = ref("Login");
    // if (PermissionStore.token !== "" || PermissionStore.adminPermission !== "") {
      BtnText.value = "Home";
    // }
    const go = useRouter();
    // const useBack= useRouter();
      // const router = useRouter()
    
    // 返回方法
    // const back = () => {
    //   go.back()
    // }

    const handleBack = () => {
      if (BtnText.value == "Login") {
        go(PageEnum.BASE_LOGIN, true);
      } else {
        go.handleBack();
      }
    };
    return {
      handleBack,
      BtnText,
      // back,
    };
  },
});
</script>


