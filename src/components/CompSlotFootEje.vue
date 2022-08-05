<script lang="ts">
import * as vue from "vue";

export default vue.defineComponent({
  name: "CompSlotFootEje",

  data() {
    return {
      name: "Arantxa" as string,
      surname: "bujalance" as string,
      todoDTOS: this.random,
      classRed: false as boolean,
      classGreen: true as boolean,
    };
  },
});
</script>

<template>
  <div>
    <footer class="bg-light text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">
              <slot name="footerh5t1"> Footer text 1</slot>
            </h5>

            <p>
              <slot name="footerText1"> Ejercicio prueba footer slot footerText1 </slot>
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">
              <slot name="footerh52"> Footer text 2</slot>
            </h5>

            <p>
              <slot name="footerText2"> Ejercicio prueba footer slot footerText2 </slot>
            </p>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>
