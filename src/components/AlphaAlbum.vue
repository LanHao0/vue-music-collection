<template>
    <div>
        <a class="sortBlue">{{alpha}}</a>

        <div class="row">

            <div v-for="data in albumData" :key="data.id">
                <div v-if="alpha === data.albumName.substr(0,1)">
                    <Album  :album-name="data.albumName"
                            :artist="data.artist"
                            :cover="data.imgURL"
                            :index="albumData.indexOf(data).toString()"
                    >
                    </Album>
                </div>

            </div>

        </div>


    </div>
</template>

<script>
    import Album from "./Album";
    import {jsonInput} from "./goodmusic";

    let data=jsonInput;
    export default {
        name: "yearAlbum",
        props:{
            alpha:String,
        },
        components:{
            Album
        },
        data(){
            return {
                albumData:data
            }
        }
    }
</script>

<style scoped>
    .sortBlue{
        color: #2696be;
        font-size: large;
    }
    a:hover{
        color: #2696be;
    }
</style>