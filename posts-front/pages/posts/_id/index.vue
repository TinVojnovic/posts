<template>
  <div>
    <h1>You are on post with an ID of: {{loadedPost.id}}</h1>
    <h1>With a magnificent title of: {{loadedPost.title}}</h1>
    <h1>And interesting content such as: {{loadedPost.content}}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  asyncData(context) {
    return axios
      .get("http://localhost:3333/fetch/" + context.params.id)
      .then(res => {
        console.log(res.data.post)
        return {
          loadedPost: res.data.post
        };
      })
      .catch(e => console.log(e));
  }
};
</script>