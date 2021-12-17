<template>
  <div>
    <v-app-bar class="indigo white--text" clipped-left app>
      <v-toolbar-title class="pa-2" style="cursor:pointer;" @click="goTo('/')">Accueil</v-toolbar-title>
      <v-toolbar-title class="pa-2" style="cursor:pointer;" @click="goTo('/tests')">KeyframesExtractor</v-toolbar-title>
      <a href="/testtest/index.html"><v-toolbar-title class="pa-2 white--text" style="cursor:pointer;text-decoration:none!important;">CompareImages</v-toolbar-title></a>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "myToolbar",
  data: function() {
    return {
    }
  },
  mounted: function () {
  },
  beforeDestroy: function () {
  },
  methods: {
    goTo(route){
      window.location.hash = route;
    }
  }
}
</script>