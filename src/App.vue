<template>
  <div id="app" class="app">
    <div class="columns is-gapless">
      <div class="column is-8">
        <Header />
        <Application />
      </div>
      <div class="column is-4 left-border">
        <Scores />
        <FinalScores />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Application from './components/Application.vue'
import Scores from './components/Scores.vue'
import FinalScores from './components/FinalScores.vue'

export default {
  name: 'App',
  components: {
    Header,
    Application,
    Scores,
    FinalScores
  }
}
</script>

<style lang="scss">
.app {
  font-family: sans-serif;
  .left-border {
    border-left: 1px solid #999;
  }
  .field .control .b-radio.radio.button,
  .field .control .b-checkbox.checkbox.button {
    height: 2.5rem;
    span {
      white-space: normal;
    }
  }
  .label {
    font-weight: bold;
    line-height: 1.2;
  }
  .label:not(:last-child) {
    margin-bottom: 0.25rem;
  }
}
</style>
