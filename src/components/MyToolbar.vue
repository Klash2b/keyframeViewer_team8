<template>
  <div>
    <v-app-bar class="indigo white--text" clipped-left app>
      <v-toolbar-title class="pa-2" style="cursor:pointer;" @click="goTo('/')">Accueil</v-toolbar-title>
      <v-toolbar-title class="pa-2" style="cursor:pointer;" @click="goTo('/tests')">Tests</v-toolbar-title>
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