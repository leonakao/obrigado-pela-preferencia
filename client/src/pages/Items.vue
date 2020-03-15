<template>
    <div id="items" class="container">
        <div class="header">
            <div class="row">
                <h2>Quem você conheceu?</h2>
            </div>
        </div>
        <div class="body">
            <div class="row box">
                <BoxItem v-for="profile in profiles" :key="profile.id" :item="profile"></BoxItem>
            </div>
        </div>
    </div>
</template>

<script>
import BoxItem from '../components/BoxItem.vue';

export default {
    data: function() {
        return {
            profiles: [
                {id: 1, image:'https://unsplash.it/200/200', name: 'Leonardo Nakao', page:'naka' },
                {id: 2, image:'https://unsplash.it/200/200', name: 'Leonardo Theodoro', page:'tormento' },
                {id: 3, image:'https://unsplash.it/200/200', name: 'Ricardo Sparapan', page:'junin' },
                {id: 4, image:'https://unsplash.it/200/200', name: 'Rafael Fernandes', page:'rafa' },
                {id: 5, image:'https://unsplash.it/200/200', name: 'Enrico Ramos', page:'talarico' },
            ]
        }
    },
    components: {
        BoxItem,
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
  flex-wrap: wrap;
  flex-direction: row;
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

html, body{
    height: 100vh;
    background-color: #bd4f6c;
    background-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%);
}
</style>