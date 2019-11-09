<template>
  <div>
    <AdminPostForm @submit="onSubmitted" />
  </div>
</template>

<script>
import AdminPostForm from "~/components/admin/AdminPostForm";
import axios from "axios";

export default {
  components: {
    AdminPostForm
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("createPost", postData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>