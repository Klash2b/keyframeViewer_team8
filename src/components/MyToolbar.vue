<template>
  <div>
    <v-app-bar class="indigo" clipped-left app>
      <v-toolbar-title @click="goHome" class="white--text">{{ $t("title") }}</v-toolbar-title>
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