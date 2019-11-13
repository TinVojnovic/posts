<template>
  <AuthForm buttonText="Login" @submitAuth="loginUser"/>
</template>

<script>
import AuthForm from "@/components/AuthForm"

export default {
  components: {
    AuthForm
  },
  methods: {
    loginUser(userInfo){
      console.log(userInfo)
      alert("You've tried logging in!")
    }
  }

}
</script>