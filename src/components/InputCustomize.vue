<template>
  <div>
    <span>{{title}}</span>
    <input
      type="text"
      :placeholder="placeholder"
      :withValidation="false"
      v-model="value"
      v-on:change="validationInput"
    />
    <!-- <i class="fab fa-medium"></i> -->
    <button @click="clearFunc">clearInput</button>
    <h1>{{this.message}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      message: "",
      autoCompleteData: ["test","access","auto"],
    };
  },
  props: {
    placeholder: { type: String },
    title: { type: String },
    icon: {},
    positionIcon: { rightIcon: Boolean },
    validation: [{ isEmpty: String }],
    autoComplete: Boolean,
    withValidation: { type: Boolean },
  },
  methods: {
    clearFunc() {
      this.value = "";
    },
    validationInput() {
      if (this.withValidation) {
        if (this.value.length == 0) {
          this.message = "خالی است";
        } else if (this.value.length > 10) {
          this.message = "نمی تواند بیشتر از 10 کاراکتر باشد";
        }
        if (this.message.length > 0) return;
      }

      var result = this.autoCompleteData.filter(
        (x) => x.indexOf(this.value) > -1
      );

      if (result && result.length > 0) {
        this.value = result[0]
      }
    },
  },
};
</script>