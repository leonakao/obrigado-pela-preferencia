<template>
    <div id="items" class="container">
        <div class="header">
            <div class="row">
                <h2>Quem você conheceu?</h2>
            </div>
        </div>
        <div class="body">
            <div class="row">
                <div v-for="a in aux" :key="a" class="four columns">
                    <image-circle></image-circle>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageCircle from '../components/ImageCircle';

export default {
    data: function() {
        return {
            aux: [1,2,3,4,5,6, 7, 8]
        }
    },
    components: {
        ImageCircle,
    }
}
</script>

<style>
.header {
    margin-top: 20%;
    text-align: center;
}

.body .column,.columns {
    margin-left: 0;
    padding: 10px;
    margin: 0 auto;
}

.body {
    margin-top: 20%;
    text-align: center;
}
</style>