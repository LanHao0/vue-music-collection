<template>

  <div class="container-fluid bg-black text-white">
    <div class="row">
      <div class="col-md-2 col-sm-1 col-lg-2">
      </div>

      <div class="col-md-10 col-sm-11 col-lg-10">
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




        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import yearAlbum from "./components/yearAlbum";
  import {jsonInput} from "./components/goodmusic";

  export default {
  name: 'app',
  components: {
    yearAlbum
  },
  data(){
    return {
      albumData:jsonInput,
      sortSelected:'Year',
      sortSelection: [
      { text: 'Release Year', value: 'Year' },
      { text: 'A-Z', value: 'Alpha' },
      ],
      soManyYears:['2019','2018','2017','2016','2015','2014','2013','2012','2011','2010',
                  '2009',
                  '2008',
                  '2007',
                  '2006',
                  '2005',
                  '2004',
                  '2003',
                  '2002',
                  '2001',
                  '2000',
                  '1999'
                ]
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
