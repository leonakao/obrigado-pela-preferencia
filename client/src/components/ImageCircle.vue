<template>
    <div class="img-circle" :style="{ 'background-image': 'url(' + img + ')' }">

    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: 'https://unsplash.it/200/200'
        }
    }
}
</script>

<style>
.img-circle {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    border-radius: 100%;
    margin-top: 30px;
    background-repeat: no-repeat;
    background-size: auto;
}
</style>