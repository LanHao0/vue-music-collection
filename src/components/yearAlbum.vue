<template>
    <div>
        <a class="sortBlue">{{years}}</a>

        <div class="row">
            <div v-for="data in albumData" :key="data.id">
                <div v-if="years === data.year" class="col-md-4 col-sm-6 col-6 col-lg-auto">
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
    a:hover{
        color: #2696be;
    }
</style>