<template>
    <div id="items" class="container">
        <div class="header">
            <div class="row">
                <h2>Quem você conheceu?</h2>
            </div>
        </div>
        <div class="body">
            <div class="row box">
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
            aux: [1,2,3,4,5]
        }
    },
    components: {
        ImageCircle,
    }
}
</script>

<style>
.header {
    margin-top: 50px;
    text-align: center;
    color: #fff;
}

.box {
  display: flex;
  justify-content: center;
}

.body .column,.columns {
    margin-left: 0;
    padding: 10px;
    margin: 0 auto;
}

.body {
    margin-top: 10%;
    text-align: center;

}

html {
    height: 100vh;
    background-color: #bd4f6c;
    background-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%);
}
</style>