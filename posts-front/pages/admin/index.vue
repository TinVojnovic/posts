<template>
  <div class="admin-page">
    <section class="new-post">
      <button @click="$router.push('/admin/newPost')">Create Post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :posts="Posts"/>
    </section>
  </div>
</template>

<script>
import PostList from "~/components/PostList";
import AppButton from "~/components/UI/AppButton";

export default {
  components: {
    PostList,
    AppButton
  },
  computed: {
    Posts() {
      return this.$store.getters.loadedPosts;
    }
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}

button {
  font-size: 24px;
  border: 2px solid white;
  padding: 7px 10px;
}

button:hover {
  background-color: white;
  color: black;
}
</style>