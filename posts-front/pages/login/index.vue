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
      this.$auth.loginWith('local',{
        data: userInfo
      })
      console.log(userInfo)
      console.log(this.$auth.loggedIn)
    }
  }

}
</script>