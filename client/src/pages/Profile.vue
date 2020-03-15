<template>
    <div class="container">
        <div class="row">
            <router-link to="/"><i class="fa fa-arrow-left"></i> Voltar</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            page: undefined
        }
    },
    created(){
        this.page = this.$route.params.page;
        console.log(this.page);
    }
}
</script>