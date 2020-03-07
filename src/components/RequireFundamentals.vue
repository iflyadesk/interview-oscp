<template>
  <div class="requireFundamentals">
    <label class="label">Require Fundamentals Course?</label>
    <b-field>
      <b-radio-button
        v-model="requireFundamentals"
        native-value="false"
        type="is-danger"
        size="is-small"
      >
        <span>No</span>
      </b-radio-button>
      <b-radio-button
        v-model="requireFundamentals"
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
  name: 'RequireFundamentals',
  computed: {
    requireFundamentals: {
      get() {
        return this.$store.getters.contactValue('require_fundamentals_course')
      },
      set(value) {
        this.$store.dispatch('setProperty', {
          name: 'require_fundamentals_course',
          value
        })
      }
    }
  }
}
</script>
