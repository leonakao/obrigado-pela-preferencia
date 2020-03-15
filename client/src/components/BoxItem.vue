<template>
    <div class="box">
        <router-link :to="`/profile/${item.page}`">
            <ImageCircle></ImageCircle>
            <span class="item-title">{{ item.name }}</span>
        </router-link>
    </div>
</template>

<script>
import ImageCircle from './ImageCircle'

export default {
    components: {
        ImageCircle
    },
    props: {
        item: {
            required: true,
            type: Object,
        }
    }
}
</script>

<style>
.box {
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  margin: 0 20px;
}

.item-title {
    font-size: 1.4em;
    color: white;
    font-weight: bold;
}
</style>