<template>
  <AuthForm buttonText="Register" @submitAuth="registerUser" hasName="true"/>
</template>

<script>
import AuthForm from "@/components/AuthForm"

export default {
  components: {
    AuthForm
  },
  methods: {
    registerUser(userInfo){
      console.log(userInfo)
      alert("You've tried registering!")
    }
  }

}
</script>