<template>
    <div class="container bg-black">
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <router-link to="/all">
                    <img :src="require('@/assets/cover/'+albumJ[$route.params.id].imgURL)">
                </router-link>

            </div>
            <div class="col-md-8 col-sm-6">
                <div style="margin:15px;">
                    <h3>{{ albumJ[$route.params.id].albumName }}</h3>
                    <p class="greyArtist">{{ albumJ[$route.params.id].artist }}</p>
                    <p class="greyArtist">{{ albumJ[$route.params.id].year }}</p>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-12">
                <table class="table table-striped table-dark">
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                    </tr>
                    <tbody>
                        <tr v-for="song in albumJ[$route.params.id].song" :key="song.name">
                            <td>{{song.name}}
                            <td>{{song.artist}}</td>
                        </tr>
                    </tbody>

                </table>

                <div v-if="albumJ[$route.params.id].song.length<5">

                    <div v-for="n in 15-albumJ[$route.params.id].song.length " :key="n.id">
                        <br>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {jsonInput} from "./goodmusic";

let raw_json=jsonInput;


export default {
        name: "insideAlbum",
        data(){

            return{
                albumJ:raw_json
            }
        }

    }
</script>

<style scoped>
    .bg-black{
        color:white;
        background-color: #000;
    }

    img {
        width: 200px;
        height: 200px;
        margin-bottom: 20px;
        margin-top: 20px;
        box-shadow: 3px 2px 28px 0 #fff;
        animation: 6s coverShadow;
    }

    hr{
        background-color: white;
    }
    .table-dark{
        background-color: #000;
    }

    @keyframes coverShadow {
        0%{
            box-shadow: 3px 2px 28px #fff;
        }
        25%{
            box-shadow: 0 2px 22px #fff;
        }
        50%{
            box-shadow: -1px -2px 26px #fff;
        }
        75%{
            box-shadow: 3px 7px 26px #fff;
        }
        100%{
            box-shadow: 3px -2px 28px #fff;
        }
    }


</style>