<template>
    <div class="">
        <router-link :to="{
                            name:'insideAlbum',
                            params:{
                                id:index
                            }
                          }">
        <div  class="albumCard">
            <img v-lazy="require('@/assets/cover/'+cover)" :key="cover">
            <div class="albumDes">
                <h6>{{ albumName }}</h6>
                <p class="greyArtist">{{ artist }}</p>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "album",
        props:{
            albumName:String,
            artist:String,
            cover:String,
            index:String
        }
    }
</script>

<style scoped>
    img {
        width: 160px;
        height: 160px;
        margin-bottom: 10px;
        margin-top: 10px;
        transition: all 1s;
    }

    img:hover {
        box-shadow: 3px 2px 28px 0px #fff;
        transition: all .5s;
    }

    .greyArtist {
        color: grey;
    }

    .albumDes {
        width: 160px;
        font-size: 12px;
    }
    a{
        color:white;
    }
    a:hover{
        text-decoration: none;
    }
</style>