<template>
  <a-result status="500" title="500" sub-title="对不起，系统出错!">
    <template #extra>
      <a-button type="primary"> Back Home </a-button>
    </template>
  </a-result>
</template>
<script>
import { Result, Button } from "ant-design-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    "a-result": Result,
    "a-button": Button,
  },
});
</script>
