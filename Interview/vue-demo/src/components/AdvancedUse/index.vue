<template>
  <div>
    <p>vue 高级特性</p>
    <hr></hr>

    <!-- 自定义 v-model -->
    <!-- <p>{{name}}</p> -->
    <!-- <CustomVModel v-model="name"></CustomVModel> -->
    <!-- <NextTick></NextTick> -->
    <ScopedSlotDemo v-slot="aaa">
      {{aaa.slotsss.title}}
    </ScopedSlotDemo>
  </div>
</template>
 
<script>
// import CustomVModel from "@/components/AdvancedUse/CustomVModel";
// import NextTick from "@/components/AdvancedUse/NextTick";
import ScopedSlotDemo from "@/components/AdvancedUse/ScopedSlotDemo";

export default {
  components: {
    // CustomVModel,
    // NextTick,
    ScopedSlotDemo,
  },
  data() {
    return {
      name: "双越",
    };
  },
};
</script>
