<template>
  <div
    style="display: flex;
    flex-direction: column;
    align-items: center;"
  >
    <router-link :to="{ name: 'Home' }">صفحه اصلی</router-link>
    <br/>
    <!-- <router-link :to="{name: 'home'}">Home</router-link> -->
    <form action="/action_page.php" style="border:1px solid #ccc">
      <div class="container">
        <h1>ٍثبت نام</h1>
        <p>لطفا فرم را تکمیل کنید</p>
        <hr />

        <label for="email"><b>ایمیل</b></label>
        <input
          type="text"
          placeholder="ایمیل را وارد کنید"
          name="email"
          required
          v-model="values.email"
        />
        {{ values.first }}
        <label for="psw"><b>پسورد</b></label>
        <input
          type="password"
          placeholder="پسورد را وارد کنید"
          name="psw"
          required
          v-model="values.password"
        />

        <label for="psw-repeat"><b>تکرار پسورد</b></label>
        <input
          type="password"
          placeholder="تکرار پسورد را وارد کنید"
          name="psw-repeat"
          required
          v-model="values.rePassword"
        />
<p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    
      <span v-for="(error,i) in errors" :key="i">{{ error }}</span>
   
  </p>
        <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style="margin-bottom:15px"
          />
          مرا بخاطر بسپار
        </label>
        
        <div class="clearfix">
          <button
            type="submit"
            class="signupbtn"
            style="font-size: 20px;"
            v-on:click="onSignup"
          >
            ثبت نام
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      values: { id: 0, email: "", password: "", rePassword: "" },
      data: [],
      errors: [],
      // idUnique: 0,
    };
  },
  methods: {
    onSignup(event) {
      event.preventDefault();
      let objList = {
        id: this.values.id++,
        email: this.values.email,
        password: this.values.password,
        rePassword: this.values.rePassword,
      };
      let compareObj = this.data.some((x) => x.email == objList.email);
      if (compareObj) {
        this.errors = "تکراری می باشد";
      } else {
        this.data.push(objList);
        console.log(this.data);
      }
    },
  },
};
</script>

<style scoped>
body {
  direction: rtl;
  align-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}

form {
  width: 50%;
  direction: rtl;
  font-size: 20px;
}
/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Extra styles for the cancel button */

/* Float cancel and signup buttons and add an equal width */

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .signupbtn {
    /* width: 100%; */
  }
}
</style>
