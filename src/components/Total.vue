<template>
  <div class="total">
    <h4>Total Score: {{ total() }} of {{ maxValue() }}</h4>
    <b-progress
      class="progress"
      :type="progressType()"
      :value="progressValue()"
    ></b-progress>
  </div>
</template>

<script>
export default {
  name: 'Total',
  methods: {
    total() {
      return this.fields
        .map(f => f.selectedValue)
        .reduce((a, b) => {
          return a + b
        }, 0)
    },
    progressValue() {
      return (this.total() / this.maxValue()) * 100
    },
    progressType() {
      if (this.progressValue() < 33) {
        return 'is-danger'
      } else if (this.progressValue() < 67) {
        return 'is-warning'
      } else {
        return 'is-success'
      }
    }
  },
  computed: {
    fields() {
      return this.$store.getters.fields
    }
  }
}
</script>

<style lang="scss">
.total {
  background: white;
  position: sticky;
  top: 0;
  z-index: 5;
  padding: 1rem;
  border-bottom: 1px solid #999;
  .progress {
    width: 80%;
  }
}
</style>
