<template>
  <div class="admin-new-formData-page">
    <section class="new-formData-form">
      <form @submit.prevent="onSave">
        <appInput v-model="formData.title">Title:</appInput>
        <appInput v-model="formData.thumbnail">Thumbnail link:</appInput>
        <appInput control-type="textarea" v-model="formData.content">Content:</appInput>
        <AppButton type="submit">Save</AppButton>
        <AppButton type="button" @click="onCancel">Cancel</AppButton>
        <AppButton type="button" @click="onDelete">Delete</AppButton>
      </form>
    </section>
  </div>
</template>

<script>
import AppInput from "~/components/UI/AppControlInput";
import AppButton from "~/components/UI/AppButton";
import axios from "axios";

export default {
  components: {
    AppInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      formData: this.post
        ? { ...this.post }
        : {
            formData: {
              title: "",
              thumbnail: "",
              content: ""
            }
          }
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.formData);
    },
    onCancel() {
      this.$router.push("/admin");
    },
    onDelete() {
      this.$store.dispatch("deletePost", this.post).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>