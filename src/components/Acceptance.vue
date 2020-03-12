<template>
  <div class="acceptance">
    <label class="label">Accept into Bootcamp</label>
    <b-field>
      <b-radio-button
        v-model="acceptance"
        native-value="Do Not Recommend"
        type="is-danger"
        size="is-small"
      >
        <span>Do Not Recommend</span>
      </b-radio-button>
      <b-radio-button
        v-model="acceptance"
        native-value="Waitlist"
        type="is-warning"
        size="is-small"
      >
        <span>Waitlist</span>
      </b-radio-button>
      <b-radio-button
        v-model="acceptance"
        native-value="Recommended"
        type="is-warning"
        size="is-small"
      >
        <span>Recommended</span>
      </b-radio-button>
      <b-radio-button
        v-model="acceptance"
        native-value="Highly Recommended"
        type="is-success"
        size="is-small"
      >
        <span>Highly Recommended</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'Acceptance',
  computed: {
    acceptance: {
      get() {
        return this.$store.getters.contactValue('acceptance')
      },
      set(value) {
        this.$store.dispatch('setProperty', { name: 'acceptance', value })
      }
    }
  }
}
</script>
