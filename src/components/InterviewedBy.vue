<template>
  <div class="interviewed-by">
    <label class="label">Interviewed by</label>
    <b-field>
      <b-autocomplete
        v-model="interviewedBy"
        :data="owners"
        @select="option => (selected = option)"
      >
        <template slot="empty">No results found</template>
      </b-autocomplete>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'InterviewedBy',
  data() {
    return {
      getOwnersUrl:
        'https://prod-112.westus.logic.azure.com:443/workflows/998c4fc067944642af3f6f08b2d929a9/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=C4l24PNqhE1Zf5qR8wxySi6nq7SEINKMhEuAqfUPGgs'
    }
  },
  methods: {
    getOwners() {
      this.$axios
        .post(this.getOwnersUrl)
        .then(result => {
          this.$store.dispatch('setOwners', result.data)
        })
        .catch(error => console.log(error))
    }
  },
  computed: {
    interviewedBy: {
      get() {
        return this.$store.getters.contactValue('interviewed_by')
      },
      set(value) {
        let oldValue = this.$store.getters.contactValue('interviewed_by')
        if (oldValue === value) {
          return
        }
        this.$store.dispatch('setProperty', { name: 'interviewed_by', value })
      }
    },
    owners() {
      let owners = this.$store.getters.owners.map(
        o => `${o.firstName} ${o.lastName}`
      )

      if (!owners) {
        return []
      }
      return owners.filter(owner => {
        return (
          owner
            .toString()
            .toLowerCase()
            .indexOf(this.interviewedBy.toLowerCase()) >= 0
        )
      })
    }
  },
  created() {
    this.getOwners()
  }
}
</script>
