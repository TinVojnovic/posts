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
import axios from 'axios'

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
            axios.post("http://localhost:3333/create", this.editedPost)
            .then(res => console.log(res))
            .catch(e => console.log(e))
        },
        onCancel(){
            this.$router.push('/admin')
        },
    },
    
}
</script>