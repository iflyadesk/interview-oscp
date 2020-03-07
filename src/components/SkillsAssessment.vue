<template>
  <div class="skillsAssessment">
    <label class="label">Skills Assessment Needed?</label>
    <b-field>
      <b-checkbox-button
        v-model="skillsAssessment"
        native-value="Cybersecurity"
        size="is-small"
      >
        <span>Cybersecurity</span>
      </b-checkbox-button>
      <b-checkbox-button
        v-model="skillsAssessment"
        native-value="Linux"
        size="is-small"
      >
        <span>Linux</span>
      </b-checkbox-button>
      <b-checkbox-button
        v-model="skillsAssessment"
        native-value="Networking"
        size="is-small"
      >
        <span>Networking</span>
      </b-checkbox-button>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'SkillsAssessment',
  computed: {
    skillsAssessment: {
      get() {
        return this.parseHubspotToArray(
          this.$store.getters.contactValue('skills_assessment_needed')
        )
      },
      set(value) {
        this.$store.dispatch('setProperty', {
          name: 'skills_assessment_needed',
          value: value.join(';')
        })
      }
    }
  },
  methods: {
    parseHubspotToArray(value) {
      if (value === null || value === '') {
        return []
      }
      return value.split(';')
    }
  }
}
</script>
