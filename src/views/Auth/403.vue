<template>
  <a-result status="403" title="403" sub-title="对不起，您没有该权限!">
    <template #extra>
      <a-button type="primary" @click="handleBack"> Back Home </a-button>
    </template>
  </a-result>
</template>
<script>
import { Result, Button } from "ant-design-vue";
import { formItemProps } from "ant-design-vue/lib/form";
import { defineComponent } from "vue";
import { PageEnum } from "../../enum/pageEnum";
// import { useGo } from "../../utils/usePage";
import {useRouter} from 'vue-router';
export default defineComponent({
  components: {
    "a-result": Result,
    "a-button": Button,
  },
  setup() {
    const go = useRouter();
    const handleBack = () => {
      go(PageEnum.BASE_HOME);
    };
    return {
      handleBack,
    };
  },
});
</script>
