<template>
  <div class="total">
    <label class="label">Total Score: {{ total() }} of {{ maxValue() }}</label>
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
    maxValue(field) {
      if (!field) {
        return this.fields
          .map(f => Math.max(...f.choices.map(c => c.value)))
          .reduce((a, b) => {
            return a + b
          }, 0)
      }
      return Math.max(...field.choices.map(c => c.value))
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
  height: 4.25rem;
  margin-bottom: 0.75rem;
}
</style>
