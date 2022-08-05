<script lang="ts">
import * as vue from "vue";

export default vue.defineComponent({
  name: "CompSlotEncabtEje",
});
</script>

<template>
  <div>
    <!--   <slot>
      <h1 class="bg-primary text-white text-center p-4">APP</h1>
    </slot> -->

    <h2 class="bg-primary text-white text-center p-4">
      <slot name="encabezado"> APP </slot>
    </h2>

    <!--   <slot>
      <h3 class="bg-primary text-white text-center p-4">APP</h3>
    </slot>
    <slot>
      <h4 class="bg-primary text-white text-center p-4">APP</h4>
    </slot>
    <slot>
      <h5 class="bg-primary text-white text-center p-4">APP</h5>
    </slot> -->
  </div>
</template>
