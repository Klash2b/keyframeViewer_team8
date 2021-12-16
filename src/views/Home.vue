<template>
  <div class="myContainer">
    <div class="imgKeyframesContainer">
      <v-file-input
        dense
        counter
        show-size
        accept="video/*"
        ref="loadedFile"
        @change="checkFile"
      ></v-file-input>
      <!-- <div v-if="currFile != null">
        <div>Nom : {{ this.currFile.name }}</div>
        <div>Taille : {{ (this.currFile.size / 1000000).toFixed(1) }} MB</div>
        <div>Type : {{ this.currFile.type }}</div>
      </div> -->
      <div v-if="currFile != null">
        <v-img
          v-for="(img, index) in thumbnailsArray"
          :key="index"
          :src="img"
          class="ma-6"
          style="cursor:pointer;min-width:60px"
          @click="displayImg(img)"
        />
      </div>
    </div>
    <div class="imgPreviewContainer">
      <v-img
        v-if="bigImgToDisplay != null"
        :src="bigImgToDisplay"
        contain
        style="width:100%;height:100%;"
      />
    </div>
    <div class="configContainer">
      <div class="sliderContainer" style="width: 100%;height: 100%;">
        <v-slider
          v-model="slider1"
          min="1"
          max="20"
          thumb-label
          label="Nombre de keyframes"
          @change="checkFile"
          ><template v-slot:append>
            <v-text-field
              v-model="slider1"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
              thumb-label
            ></v-text-field> </template
        ></v-slider>
      </div>

      <div class="sliderContainer" style="width: 100%;height: 100%;">
        <v-slider
          disabled
          v-model="slider2"
          min="1"
          max="20"
          thumb-label
          label="Nombre de keyframes"
          ><template v-slot:append>
            <v-text-field
              v-model="slider2"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field> </template
        ></v-slider>
      </div>

      <div class="sliderContainer" style="width: 100%;height: 100%;">
        <!-- <v-slider v-model="slider3" min="0" max="20" label="Nombre de keyframes"
          ><template v-slot:append>
            <v-text-field
              v-model="slider3"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field> </template
        ></v-slider> -->

        <v-range-slider
          readonly
          v-model="slider3"
          label="Nombre de keyframes"
          max="20"
          min="-20"
          thumb-label
        ></v-range-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      myVar: false,
      currFile: null,
      bigImgToDisplay: null,
      thumbnailsArray: [],
      slider1: 1,
      slider2: 2,
      slider3: [-10, 10],
    };
  },
  methods: {
    checkFile(file) {
      console.log(file);
      console.log(this.slider1);

      this.thumbnailsArray = [];
      for (var i = 1; i <= this.slider1; i++) {
        this.thumbnailsArray.push("https://picsum.photos/800/600?random=" + i);
      }
      if (isNaN(file) == true || file == null) {
        this.currFile = file;
      }
    },
    displayImg(img) {
      console.log(img);
      this.bigImgToDisplay = img;
    },
  },
  mounted() {},
  beforeMount() {},
};
</script>

<style scoped>
.myContainer {
  /* Pour que le container de base prenne toute la page (-64px pour la taille de la toolbar) */
  height: calc(100vh - 64px);
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
}

.imgKeyframesContainer {
  width: 30%;
  height: 75%;
  background-color: #fafafa;
  padding: 30px;
  overflow-y: scroll;
}

.imgPreviewContainer {
  width: 70%;
  height: 75%;
  background-color: #fafafa;
}

.configContainer {
  display: flex;
  border-top: 2px solid grey;
  width: 100%;
  height: 25%;
  background-color: #fafafa;
  overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 5px;
}

.sliderContainer {
  display: flex;
  align-items: flex-end;
}
</style>
