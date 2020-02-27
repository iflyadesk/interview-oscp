<template>
  <div class="header">
    <div class="columns">
      <div class="column is-4">
        <b-field label="Interviewed by">
          <b-input v-model="interviewedBy" />
        </b-field>
        <b-field label="Interview Date">
          <b-datepicker v-model="interviewDate" />
        </b-field>
      </div>
      <div class="column is-4">
        <label class="label">Interview Notes</label>
        <b-field>
          <b-input type="textarea" v-model="interviewNotes"></b-input>
        </b-field>
        <label class="label">GI Bill?</label>
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
      <div class="column is-4">
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
        </b-field>
        <div class="columns">
          <div class="column ">
            <Total />
          </div>
          <div class="column is-narrow align-right">
            <b-button
              @click="save"
              type="is-info"
              class="has-margin-top"
              :loading="isLoading"
            >
              <span>Save</span>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Total from './Total'
import moment from 'moment-timezone'

export default {
  name: 'Header',
  data() {
    return {
      isLoading: false,
      updateContactUrl:
        'https://prod-28.westus.logic.azure.com:443/workflows/2397df4b234f4f7db6fdb57a74e01e34/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9sC6mT_cLRzv4FRzJ9mgOW8gSlOJu8zIocZQbPNB778'
    }
  },
  methods: {
    setProperty({ name, value }) {
      this.$store.dispatch('setProperty', { name, value })
    },
    value(field) {
      return this.$store.getters.contactValue(field)
    },
    save() {
      this.isLoading = true
      this.$axios
        .post(this.updateContactUrl, {
          vid: this.vid(),
          properties: this.$store.getters.properties
        })
        .then(() => {
          this.isLoading = false
        })
        .catch(error => console.log(error))
    },
    vid() {
      return this.getUrlVars().vid
    },
    getUrlVars() {
      var vars = {}
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
        m,
        key,
        value
      ) {
        vars[key] = value
      })
      return vars
    }
  },
  computed: {
    interviewDate: {
      get() {
        let offsetMin = moment().utcOffset()
        let unix = parseInt(this.value('interview_date'))
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
        this.setProperty({ name: 'interview_date', value: unix.toString() })
      }
    },
    interviewedBy: {
      get() {
        return this.value('interviewed_by')
      },
      set(value) {
        this.setProperty({ name: 'interviewed_by', value })
      }
    },
    interviewNotes: {
      get() {
        return this.value('interview_notes')
      },
      set(value) {
        this.setProperty({ name: 'interview_notes', value })
      }
    },
    acceptance: {
      get() {
        return this.value('acceptance')
      },
      set(value) {
        this.setProperty({ name: 'acceptance', value })
      }
    },
    scholarship: {
      get() {
        return this.value('scholarship')
      },
      set(value) {
        this.setProperty({ name: 'scholarship', value })
      }
    },
    giBill: {
      get() {
        return this.value('gi_bill')
      },
      set(value) {
        this.setProperty({ name: 'gi_bill', value })
      }
    }
  },
  components: {
    Total
  }
}
</script>

<style lang="scss">
.header {
  height: 260px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #999;
  padding: 1rem;
  background: white;
  z-index: 5;
  .field {
    .control {
      .b-radio.radio.button {
        height: 3em;
        span {
          white-space: normal;
        }
      }
    }
  }
  .align-right {
    text-align: right;
  }
  .has-margin-top {
    margin-top: 20px;
  }
}
</style>
