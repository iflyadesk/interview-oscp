<template>
  <div class="lead-status">
    <b-field label="Lead Status OSCP Bootcamp">
      <b-select v-model="hsLeadStatusOscpBootcamp">
        <option
          v-for="(choice, idx) in choices"
          :value="choice.value"
          :key="idx"
          >{{ choice.label }}</option
        >
      </b-select>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'LeadStatus',
  data() {
    return {
      getFieldUrl:
        'https://prod-75.westus.logic.azure.com:443/workflows/2d39be7a1d6a4b54a310387382c8a64c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=j-Xexmv1h8o_esVC7k5CYRtIQbEOy2lov7Xj3V_cC24',
      field: {},
      hsFieldId: 'lead_status_oscp_bootccamp'
    }
  },
  computed: {
    choices() {
      if (this.field && this.field.options) {
        return this.field.options
      }
      return this.field.options || []
    },
    hsLeadStatusOscpBootcamp: {
      get() {
        return this.$store.getters.contactValue(this.hsFieldId)
      },
      set(value) {
        let oldValue = this.$store.getters.contactValue(this.hsFieldId)
        if (oldValue === value) {
          return
        }
        this.$store.dispatch('setProperty', {
          name: this.hsFieldId,
          value
        })
      }
    }
  },
  methods: {
    getChoices() {
      this.$axios
        .post(this.getFieldUrl, { field: this.hsFieldId })
        .then(result => {
          this.field = result.data
        })
        .catch(error => console.log(error))
    }
  },
  created() {
    this.getChoices()
  }
}
</script>
