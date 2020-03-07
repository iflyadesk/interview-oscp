<template>
  <div class="bootcamp">
    <b-field label="Which PRO Program are they interested in?">
      <b-select multiple v-model="programType" size="is-small">
        <option
          v-for="(option, idx) in proOptions"
          :value="option.value"
          :key="idx"
        >
          {{ option.label }}
        </option>
      </b-select>
    </b-field>
    <b-field label="Which REMOTE Program are they interested in?">
      <b-select multiple v-model="programTypeRemote" size="is-small">
        <option
          v-for="(option, idx) in remoteOptions"
          :value="option.value"
          :key="idx"
        >
          {{ option.label }}
        </option>
      </b-select>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'Bootcamp',
  data() {
    return {
      getPropertyOptionsUrl:
        'https://prod-44.westus.logic.azure.com:443/workflows/5363cf76113a45f5b764f64151903b42/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SPzGDRwxtzye9kRaTbCJoeQ_OqyAZ3y97AQEaIGRv4A'
    }
  },
  computed: {
    proOptions() {
      let pro = this.$store.getters.propertyOption('program_type')
      if (!pro) {
        return []
      }
      return pro.options.filter(o => !o.hidden)
    },
    remoteOptions() {
      let remote = this.$store.getters.propertyOption('program_type_remote')
      if (!remote) {
        return []
      }
      return remote.options.filter(o => !o.hidden)
    },
    programType: {
      get() {
        return this.parseHubspotToArray(
          this.$store.getters.contactValue('program_type')
        )
      },
      set(value) {
        this.$store.dispatch('setProperty', {
          name: 'program_type',
          value: value.join(';')
        })
      }
    },
    programTypeRemote: {
      get() {
        return this.parseHubspotToArray(
          this.$store.getters.contactValue('program_type_remote')
        )
      },
      set(value) {
        this.$store.dispatch('setProperty', {
          name: 'program_type_remote',
          value: value.join(';')
        })
      }
    }
  },
  methods: {
    getProperties() {
      this.$axios
        .post(this.getPropertyOptionsUrl)
        .then(result => {
          this.$store.dispatch('setPropertyOptions', { options: result.data })
        })
        .catch(error => console.log(error))
    },
    parseHubspotToArray(value) {
      if (value === null || value === '') {
        return []
      }
      return value.split(';')
    }
  },
  mounted() {
    this.getProperties()
  }
}
</script>
