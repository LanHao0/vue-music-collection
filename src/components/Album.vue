<template>
    <div class="col-md-3 col-sm-6 col-6 col-lg-3 col-xl-auto">
        <router-link :to="'/insideAlbum/'+id">
        <div  class="albumCard">
            <img :src="require('@/assets/cover/'+cover)">
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
            id:String,
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