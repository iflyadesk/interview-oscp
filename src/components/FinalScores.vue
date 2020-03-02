<template>
  <div class="final-scores">
    <div class="columns">
      <div class="column">
        <Acceptance />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <Scholarship />
      </div>
      <div class="column">
        <b-field label="Amount">
          <b-input
            type="number"
            min="0"
            max="10000"
            v-model="scholarshipAmount"
          />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column ">
        <Total />
      </div>
      <div class="column is-narrow">
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
</template>

<script>
import Total from './Total'
import Acceptance from './Acceptance'
import Scholarship from './Scholarship'

export default {
  name: 'FinalScores',
  data() {
    return {
      isLoading: false,
      updateContactUrl:
        'https://prod-28.westus.logic.azure.com:443/workflows/2397df4b234f4f7db6fdb57a74e01e34/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9sC6mT_cLRzv4FRzJ9mgOW8gSlOJu8zIocZQbPNB778'
    }
  },
  methods: {
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
    scholarshipAmount: {
      get() {
        return this.$store.getters.contactValue('scholarship_amount')
      },
      set(value) {
        this.$store.dispatch('setProperty', {
          name: 'scholarship_amount',
          value
        })
      }
    }
  },
  components: {
    Total,
    Acceptance,
    Scholarship
  }
}
</script>

<style lang="scss">
.final-scores {
  padding: 1rem;
  border-top: 1px solid #999;
  .has-margin-top {
    margin-top: 20px;
  }
}
</style>
