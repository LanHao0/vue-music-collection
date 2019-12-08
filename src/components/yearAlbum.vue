<template>
    <div>
        <p class="sortBlue">{{years}}</p>
        <div class="row">

            <div v-for="data in albumData" :key="data.id">
                <div v-if="years === data.year">
                    <Album  :album-name="data.albumName"
                            :artist="data.artist"
                            :cover="data.imgURL"
                            :id="data.imgURL.substr(0,data.imgURL.length-4)"
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
            years:String,
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
</style>