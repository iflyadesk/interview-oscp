<template>
  <div class="header">
    <div class="columns">
      <div class="column">
        <div class="columns">
          <div class="column">
            <InterviewedBy />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Interview Date">
              <b-datepicker v-model="interviewDate" />
            </b-field>
          </div>
        </div>
      </div>

      <div class="column">
        <label class="label">Interview Notes</label>
        <b-field>
          <b-input type="textarea" v-model="interviewNotes"></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import InterviewedBy from './InterviewedBy'
import moment from 'moment-timezone'

export default {
  name: 'Header',
  computed: {
    interviewDate: {
      get() {
        let offsetMin = moment().utcOffset()
        let unix = parseInt(this.$store.getters.contactValue('interview_date'))
        if (isNaN(unix)) {
          return null
        }
        let date = moment(unix)
        let result = date.subtract(offsetMin, 'minutes').toDate()
        return result
      },
      set(value) {
        let offsetMin = moment().utcOffset()
        let date = moment(value)
        let unix = date.add(offsetMin, 'minutes').valueOf()
        this.$store.dispatch('setProperty', {
          name: 'interview_date',
          value: unix.toString()
        })
      }
    },
    interviewNotes: {
      get() {
        return this.$store.getters.contactValue('interview_notes')
      },
      set(value) {
        this.$store.dispatch('setProperty', { name: 'interview_notes', value })
      }
    }
  },
  components: {
    InterviewedBy
  }
}
</script>

<style lang="scss">
.header {
  border-bottom: 1px solid #999;
  padding: 1rem;
}
</style>
