<template>
  <div class="application">
    <label class="label section-heading is-first">Contact</label>
    <section class="section">
      <div class="columns">
        <div class="column">
          <label class="label">First Name</label>
          <span>{{ value('firstname') }}</span>
        </div>

        <div class="column">
          <label class="label">Last Name</label>
          <span> {{ value('lastname') }}</span>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <label class="label">Email</label>
          <span>{{ value('email') }}</span>
        </div>

        <div class="column">
          <label class="label">Phone</label>
          <a :href="`tel:${value('phone')}`">{{ value('phone') }}</a>
        </div>
      </div>
      <div class="columns">
        <div class="column is-3">
          <label class="label">City</label>
          <span>{{ value('city') }}</span>
        </div>

        <div class="column">
          <label class="label is-3">State / Region</label>
          <span>{{ value('state') }}</span>
        </div>

        <div class="column is-6">
          <label class="label">Country</label>
          <span>{{ value('country') }}</span>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <label class="label">Bootcamp</label>
          <span>{{ value('bootcamp') }}</span>
        </div>
        <div class="column">
          <label class="label">Lead Sources:</label>
          <span>{{ value('lead_sources') }}</span>
        </div>
      </div>
    </section>

    <label class="label section-heading">
      Education and Employment
    </label>
    <section class="section">
      <div class="columns">
        <div class="column">
          <label class="label">LinkedIn</label>
          <a :href="value('linkedinbio')" target="_blank">{{
            value('linkedinbio')
          }}</a>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <label class="label">Most recent salary</label>
          <span>{{ value('most_recent_salary') }}</span>
        </div>
        <div class="column">
          <label class="label">Desired salary in 6 mo</label>
          <span>{{ value('desired_salary_in_six_months') }}</span>
        </div>
        <div class="column">
          <label class="label">Desired salary in 2 yrs</label>
          <span>{{ value('desired_salary_in_two_years') }}</span>
        </div>
      </div>
    </section>
    <label class="label section-heading">
      Skills
    </label>
    <section class="section">
      <div v-if="value('computer_networking') === 'true'" class="columns">
        <div class="column">
          <label class="label">Data Networking</label>
          <span>
            {{ value('computer_networking_profiency') }}:
            {{ value('computer_networking_detail') }}
          </span>
        </div>
      </div>

      <div v-if="value('linux_command_line') === 'true'" class="columns">
        <div class="column">
          <label class="label">Linux Command Line</label>
          <span>
            {{ value('linux_command_line_proficiency') }}
          </span>
        </div>
      </div>

      <div
        v-if="value('javascript_ecma_script_typescript') === 'true'"
        class="columns"
      >
        <div class="column">
          <label class="label">Javascript</label>
          <span>
            {{ value('javascript_ecma_script_typescript_proficiency') }}
          </span>
        </div>
      </div>

      <div v-if="value('python') === 'true'" class="columns">
        <div class="column">
          <label class="label">Python</label>
          <span>
            {{ value('python_proficiency') }}
          </span>
        </div>
      </div>

      <div v-if="value('sql_mysql_postgres_t_sql') === 'true'" class="columns">
        <div class="column">
          <label class="label">SQL / MySQL / Postgres / T-SQL</label>
          <span>
            {{ value('sql_mysql_postgres_t_sql_proficiency') }}
          </span>
        </div>
      </div>

      <div
        v-if="value('other_programming_languages') === 'true'"
        class="columns"
      >
        <div class="column">
          <label class="label">Other Programming Languages</label>
          <span>
            {{ value('other_programming_languages_proficiency') }}:
            {{ value('other_programming_languages_detail') }}
          </span>
        </div>
      </div>

      <div
        v-if="value('governance_risk_and_compliance') === 'true'"
        class="columns"
      >
        <div class="column">
          <label class="label">Governance, Risk, and Compliance</label>
          <span>
            {{ value('governance_risk_and_compliance_proficiency') }}
          </span>
        </div>
      </div>

      <div v-if="value('other_languages') === 'true'" class="columns">
        <div class="column">
          <label class="label"
            >Other Technical / Computer / Security Skills</label
          >
          <span>
            {{ value('other_languages_proficiency') }}
          </span>
        </div>
      </div>
    </section>
    <label class="label section-heading">
      Certifications
    </label>
    <section class="section">
      {{ value('certifications') }}
    </section>

    <label class="label section-heading">Essays</label>
    <section class="section is-last">
      <label class="label">
        What's your story?
      </label>
      <p>
        {{ value('personal_statement') }}
      </p>

      <div class="vertical-space"></div>

      <label class="label">
        How do you want your life to change as a result of attending Evolve
        Security Academy?
      </label>

      <p>
        {{ value('life_change_essay') }}
      </p>

      <div class="vertical-space"></div>

      <label class="label">
        What excites you about cybersecurity?
      </label>
      <p>{{ value('cybersecurity_essay') }}</p>

      <div class="vertical-space"></div>

      <label class="label">
        (Optional) What makes you uniquely qualified for a partial scholarship?
      </label>
      <p>{{ value('scholarship_essay') }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Application',
  data() {
    return {
      getContactUrl:
        'https://prod-84.westus.logic.azure.com:443/workflows/fffb38d3487346f9854967f76fea0b3a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9_C2BY4zRoYpJVUQU-SnOuWdPnia3KAB6QxshjnDs_Y'
    }
  },
  computed: {
    contact() {
      return this.$store.getters.contact
    }
  },
  methods: {
    value(field) {
      return this.$store.getters.contactValue(field)
    },
    getContact() {
      this.$axios
        .post(this.getContactUrl, { vid: this.vid() })
        .then(result => {
          this.$store.dispatch('setContact', result.data)
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
  mounted() {
    this.getContact()
  }
}
</script>

<style lang="scss">
.application {
  font-size: 0.875rem;
  height: calc(100vh - 185px);
  overflow-y: scroll;
  padding-bottom: 3rem;

  .has-border-top {
    border-top: 1px solid black;
  }

  .has-border-bottom {
    border-bottom: 1px solid black;
  }

  table {
    width: 100%;
    td {
      padding: 0.5rem;
    }
  }
  .label:not(:last-child) {
    margin-bottom: 0;
  }
  .vertical-space {
    height: 30px;
  }
  .section-heading.label {
    background: #eee;
    padding: 1rem;
    margin: 0.5rem 0;
  }
  .section-heading.label.is-first {
    margin: 0;
  }
  .section {
    padding: 1rem 2rem;
  }
}
</style>
