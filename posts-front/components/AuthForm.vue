<template>
  <v-form v-model="valid" @submit.prevent="onSubmitted">
    <v-text-field v-model="userInfo.username" label="Username" v-if="hasName" />

    <v-text-field v-model="userInfo.email" label="Email" />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
    />
    <v-btn type="submit" :disabled="!valid">{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      showPassword: true,
      userInfo: {
        username: "",
        email: "pero@gmail.com",
        password: "123"
      }
    };
  },
  props: {
    buttonText: "",
    hasName: false
  },
  methods: {
    onSubmitted() {
      console.log("submitted");
      this.$emit("submitAuth", this.userInfo);
    }
  }
};
</script>