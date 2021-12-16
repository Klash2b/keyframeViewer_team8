<template>
  <div class="myContainer">
    Tests
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      myVar: false,
      currFile: null,
    };
  },
  methods: {
    checkFile(file) {
      console.log(file);
      this.currFile = file;
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
  display: flex;
  flex-wrap: wrap;
}

.imgKeyframesContainer {
  width: 20%;
  height: 75%;
  background-color: red;
  padding: 8px;
}

.imgPreviewContainer {
  width: 80%;
  height: 75%;
  background-color: green;
}

.configContainer {
  width: 100%;
  height: 25%;
  background-color: blue;
}
</style>
