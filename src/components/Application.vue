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
          <span>{{ value('lastname') }}</span>
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
      <!-- <div class="columns">
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
      </div>-->

      <div class="columns">
        <div class="column">
          <label class="label">Program Selected</label>
          <div>{{ value('oscp_bootcamp_cohort') }}</div>
        </div>
        <div class="column">
          <label class="label">Lead Sources</label>
          <span>{{ value('lead_sources') }}</span>
          <span>{{ value('lead_source_other') }}</span>
        </div>
      </div>
    </section>

    <label class="label section-heading">Qualifications</label>
    <section class="section">
      <div class="columns">
        <div class="column">
          <label class="label">Evolve Security Bootcamp Alumni</label>
          <div>{{ value('cybersecurity_bootcamp_alum') }}</div>
        </div>
        <div class="column">
          <label class="label"
            >Bachelor’s / Master’s in CS / IS / related field</label
          >
          <span>{{ value('cybersecurity_degree') }}</span>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <label class="label">Cybersecurity Industry Experience</label>
          <div>{{ value('cybersecurity_industry_experience') }}</div>
        </div>
        <div class="column">
          <label class="label">Certifications</label>
          <span>{{ value('oscp_bootcamp_certification_experience') }}</span>
          <span>{{ value('certifications_label') }}</span>
        </div>
      </div>
    </section>

    <label class="label section-heading">Experience</label>
    <section class="section">
      <div class="columns">
        <div class="column">
          <label class="label">LinkedIn</label>
          <a :href="value('linkedin_profile')" target="_blank">
            {{ value('linkedin_profile') }}
          </a>
          <a :href="value('linkedinbio')" target="_blank">
            {{ value('linkedinbio') }}
          </a>
        </div>
        <div class="column">
          <label class="label">Resume</label>
          <a
            :href="value('upload_resume')"
            target="_blank"
            v-if="value('upload_resume')"
            >View</a
          >
        </div>
      </div>

      <div v-if="value('school_1_type')" class="employer">
        <div class="columns">
          <div class="column">
            <label class="label">Most Recent School</label>
            <span>{{ value('school_1_type') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Name</label>
            <span>{{ value('school_1_name') }}</span>
          </div>
          <div class="column">
            <label class="label">Major</label>
            <span>{{ value('school_1_major') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Start Year</label>
            <span>{{ value('school_1_start_year') }}</span>
          </div>
          <div class="column">
            <label class="label">End Year</label>
            <span>{{ value('school_1_end_year') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Capstone Project</label>
            <span>{{ value('school_1_capstone_project') }}</span>
          </div>
        </div>
      </div>

      <div v-if="value('school_2_type')" class="employer">
        <div class="columns">
          <div class="column">
            <label class="label">School 2</label>
            <span>{{ value('school_2_type') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Name</label>
            <span>{{ value('school_2_name') }}</span>
          </div>
          <div class="column">
            <label class="label">Major</label>
            <span>{{ value('school_2_major') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Start Year</label>
            <span>{{ value('school_2_start_year') }}</span>
          </div>
          <div class="column">
            <label class="label">End Year</label>
            <span>{{ value('school_2_end_year') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Capstone Project</label>
            <span>{{ value('school_2_capstone_project') }}</span>
          </div>
        </div>
      </div>

      <div v-if="value('school_3_type')" class="employer">
        <div class="columns">
          <div class="column">
            <label class="label">School 3</label>
            <span>{{ value('school_3_type') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Name</label>
            <span>{{ value('school_3_name') }}</span>
          </div>
          <div class="column">
            <label class="label">Major</label>
            <span>{{ value('school_3_major') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Start Year</label>
            <span>{{ value('school_3_start_year') }}</span>
          </div>
          <div class="column">
            <label class="label">End Year</label>
            <span>{{ value('school_3_end_year') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Capstone Project</label>
            <span>{{ value('school_3_capstone_project') }}</span>
          </div>
        </div>
      </div>

      <div v-if="value('latest_employer_name')" class="employer">
        <div class="columns">
          <div class="column">
            <label class="label">Latest Employer Name</label>
            <span>{{ value('latest_employer_name') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Job Title</label>
            <span>{{ value('latest_employer_job_title') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">City</label>
            <span>{{ value('latest_employer_city') }}</span>
          </div>
          <div class="column">
            <label class="label">State/Region</label>
            <span>{{ value('latest_employer_state_region') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Start Year</label>
            <span>{{ value('latest_employer_start_year') }}</span>
          </div>
          <div class="column">
            <label class="label">End Year</label>
            <span>{{ value('latest_employer_end_year') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Job Description</label>
            <span>{{ value('latest_employer_job_description') }}</span>
          </div>
        </div>
      </div>

      <div v-if="value('employer_2_name')" class="employer">
        <div class="columns">
          <div class="column">
            <label class="label">Employer 2 Name</label>
            <span>{{ value('employer_2_name') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Job Title</label>
            <span>{{ value('employer_2_job_title') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">City</label>
            <span>{{ value('employer_2_city') }}</span>
          </div>
          <div class="column">
            <label class="label">State/Region</label>
            <span>{{ value('employer_2_state_region') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Start Year</label>
            <span>{{ value('employer_2_start_year') }}</span>
          </div>
          <div class="column">
            <label class="label">End Year</label>
            <span>{{ value('employer_2_end_year') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Job Description</label>
            <span>{{ value('employer_2_job_description') }}</span>
          </div>
        </div>
      </div>

      <div v-if="value('employer_3_name')" class="employer">
        <div class="columns">
          <div class="column">
            <label class="label">Employer 3 Name</label>
            <span>{{ value('employer_3_name') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Job Title</label>
            <span>{{ value('employer_3_job_title') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">City</label>
            <span>{{ value('employer_3_city') }}</span>
          </div>
          <div class="column">
            <label class="label">State/Region</label>
            <span>{{ value('employer_3_state_region') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Start Year</label>
            <span>{{ value('employer_3_start_year') }}</span>
          </div>
          <div class="column">
            <label class="label">End Year</label>
            <span>{{ value('employer_3_end_year') }}</span>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <label class="label">Job Description</label>
            <span>{{ value('employer_3_job_description') }}</span>
          </div>
        </div>
      </div>
    </section>

    <label class="label section-heading">Details</label>
    <section class="section is-last">
      <label class="label"
        >(Optional) What makes you uniquely qualified for a partial
        scholarship?</label
      >
      <p>{{ value('scholarship_essay') }}</p>

      <div class="vertical-space"></div>

      <div class="columns">
        <div class="column">
          <label class="label">Corporate Training Budget</label>
          <span>{{ value('corporate_training_budget') }}</span>
        </div>
      </div>
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
    },
    programType() {
      return this.parseHubspotToArray(this.value('program_type'))
    },
    programTypeRemote() {
      return this.parseHubspotToArray(this.value('program_type_remote'))
    }
  },
  methods: {
    parseHubspotToArray(value) {
      if (value === null || value === '') {
        return []
      }
      return value.split(';')
    },
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
  .employer {
    border: 5px solid #eee;
    padding: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
