<template>
    <div>
        <AdminPostForm @submit="onSubmitted"/>
    </div>
</template>

<script>
import AdminPostForm from "~/components/admin/AdminPostForm"
import axios from 'axios'

export default {
    components: {
        AdminPostForm
    },
    methods: {
        onSubmitted(postData){
            axios.post("http://localhost:3333/create", postData)
            .then(res => console.log(res))
            .catch(e => console.log(e))

            this.$router.push('/admin')
        }
    },
    
}
</script>