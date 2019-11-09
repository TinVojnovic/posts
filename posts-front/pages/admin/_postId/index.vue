<template>
  <div>
    <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
  </div>
</template>

<script>
import AdminPostForm from "~/components/admin/AdminPostForm";
import axios from "axios";

export default {
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get("http://localhost:3333/fetch/" + context.params.postId)
      .then(res => {
        console.log(res.data.post);
        return {
          loadedPost: res.data.post
        };
      })
      .catch(e => console.log(e));
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("editPost", postData).then(() => {
        this.$router.push("/admin")
      });
    },
  }
};
</script>