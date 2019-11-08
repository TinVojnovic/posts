<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <form @submit.prevent="onSave">
                <appInput v-model="editedPost.title">Title: </appInput>
                <appInput v-model="editedPost.thumbnail">Thumbnail link: </appInput>
                <appInput 
                    control-type="textarea" 
                    v-model="editedPost.content">Content: </appInput>
                <AppButton type="submit">Save</AppButton>
                <AppButton type="button" @click="onCancel">Cancel</AppButton>
            </form>
        </section>
    </div>
</template>

<script>
import AppInput from "~/components/UI/AppControlInput"
import AppButton from "~/components/UI/AppButton"

export default {
    components: {
        AppInput,
        AppButton
    },
    data(){
        return{
            editedPost: {
                title: "",
                thumbnail: "",
                content: ""
            }
        }
    },
    methods: {
        onSave(){
            this.$emit('submit', this.editedPost)
        },
        onCancel(){
            this.$router.push('/admin')
        },
    },
    
}
</script>