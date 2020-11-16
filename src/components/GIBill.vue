<template>
  <div class="gibill">
    <label class="label">Active GI Bill Benefit?</label>
    <b-field>
      <b-radio-button
        v-model="giBill"
        native-value="false"
        type="is-danger"
        size="is-small"
      >
        <span>No</span>
      </b-radio-button>
      <b-radio-button
        v-model="giBill"
        native-value="true"
        type="is-success"
        size="is-small"
      >
        <span>Yes</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'GIBill',
  computed: {
    giBill: {
      get() {
        return this.$store.getters.contactValue('gi_bill')
      },
      set(value) {
        this.$store.dispatch('setProperty', { name: 'gi_bill', value })
      }
    }
  }
}
</script>
