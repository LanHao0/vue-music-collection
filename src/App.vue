<template>

  <div class="container-fluid bg-black text-white">
    <div class="row">

      <div class="col-md-12 col-sm-12 col-lg-12 col-12">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <h2>My Music Collection</h2>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col">
              <p>Sorted by:
                <label>
                  <select class="linkBlue" v-model="sortSelected">
                    <option v-for="opt in sortSelection" :value="opt.value" :key="opt.value">
                      {{ opt.text }}

                    </option>

                  </select>
                </label>

                Genre:
                <label>
                  <select class="linkBlue">
                    <option>All genre</option>
                  </select>
                </label>
              </p>
            </div>
          </div>
          <div v-if="sortSelected === 'Year'">
            <year-album v-for="year in soManyYears" :years="year" :key="year"></year-album>
          </div>

          <div v-if="sortSelected === 'Alpha'">
            <alpha-album v-for="letters in soManyLetters" :alpha="letters" :key="letters"></alpha-album>
          </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import yearAlbum from "./components/yearAlbum";
  import {jsonInput} from "./components/goodmusic";
  import AlphaAlbum from "./components/AlphaAlbum";

  let data=jsonInput;
  let yearARR=[];
  let AZARR=[];

  for(let i=0;i<data.length;i++){
    if(yearARR.indexOf(data[i].year)===-1){
      yearARR.push(data[i].year)
    }
    if (AZARR.indexOf(data[i].albumName.substr(0,1))===-1){
      AZARR.push((data[i].albumName.substr(0,1)));
    }
  }


  AZARR.sort(compareAz);
  function compareAz(a, b) {
    let aa=a;
    let bb = b;
    if(aa>bb){return 1}
    if(aa<bb){return -1}
    return 0
  }
  yearARR.sort(desCompare)
  function desCompare(a,b){
    return b-a;
  }



  export default {
  name: 'app',
  components: {
    yearAlbum,
    AlphaAlbum
  },
  data(){
    return {
      albumData:jsonInput,
      sortSelected:'Year',
      sortSelection: [
      { text: 'Release Year', value: 'Year' },
      { text: 'A-Z', value: 'Alpha' },
      ],
      soManyYears:yearARR,
      soManyLetters:AZARR,
      ad:'        <!-- 歌单旁边 -->\n' +
              '        <ins class="adsbygoogle"\n' +
              '             style="display:inline-block;width:300px;height:1050px"\n' +
              '             data-ad-client="ca-pub-1635707682070310"\n' +
              '             data-ad-slot="3629680832"></ins>\n',
    }
  }
}
</script>

<style scoped>

  .bg-black{
    background-color: #000;
  }

  .linkBlue {
    color: #2696be;
    background-color: #000;
    border: none
  }

  .linkBlue select {
    background-color: #eee;
  }



  hr{
    background-color: #eeeeee;
  }
</style>
