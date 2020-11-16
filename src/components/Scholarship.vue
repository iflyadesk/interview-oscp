<template>
  <div class="scholarship">
    <label class="label">Scholarship</label>
    <b-field>
      <b-radio-button
        v-model="scholarship"
        native-value="Do Not Recommend"
        type="is-danger"
        size="is-small"
      >
        <span>Do Not Recommend</span>
      </b-radio-button>
      <b-radio-button
        v-model="scholarship"
        native-value="Recommended"
        type="is-warning"
        size="is-small"
      >
        <span>Recommended</span>
      </b-radio-button>
      <b-radio-button
        v-model="scholarship"
        native-value="Highly Recommended"
        type="is-success"
        size="is-small"
      >
        <span>Highly Recommended</span>
      </b-radio-button>
      <b-radio-button
        v-model="scholarship"
        native-value="Full Ride Nominee"
        type="is-success"
        size="is-small"
      >
        <span>Full Ride Nominee</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'Scholarship',
  computed: {
    scholarship: {
      get() {
        return this.$store.getters.contactValue('scholarship')
      },
      set(value) {
        this.$store.dispatch('setProperty', { name: 'scholarship', value })
      }
    }
  }
}
</script>
