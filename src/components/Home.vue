<template>
  <div class="home">
    <router-link to="/Register">ثبت نام</router-link>
    <div>
      <br />
      <hr />
    </div>
    <br />
    <InputCustomize placeholder="453453" :withValidation="true" />
  </div>
</template>

<script>
import InputCustomize from "./InputCustomize";
export default {
  name: "home",
  components: {
   InputCustomize,
  },
  data() {
    return {
      // message: "testttttti",
    };
  },
  methods: {},
};
</script>
<style scoped></style>
