<template>
  <div id="app" class="app">
    <Header />
    <div class="columns is-gapless">
      <div class="column is-8">
        <Application />
      </div>
      <div class="column is-4">
        <Scores />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Application from './components/Application.vue'
import Scores from './components/Scores.vue'

export default {
  name: 'App',
  components: {
    Header,
    Application,
    Scores
  }
}
</script>

<style lang="scss">
.app {
  font-family: sans-serif;
}
</style>
