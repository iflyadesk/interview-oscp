<template>
  <div class="application">
    <h1>Full Application</h1>
    <table>
      <tr>
        <td valign="top"><span class="label">Submission:</span></td>
        <td colspan="2">{{ value('submission') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Bootcamp:</span></td>
        <td colspan="2">{{ value('bootcamp') }}</td>
      </tr>
      <tr>
        <td colspan="3">
          <h2 class="has-border-top has-border-bottom">Personal Information</h2>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Name:</span></td>
        <td colspan="2">{{ value('firstname') }} {{ value('lastname') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Email:</span></td>
        <td colspan="2">{{ value('email') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Phone:</span></td>
        <td colspan="2">
          <a :href="`tel:${value('phone')}`">{{ value('phone') }}</a>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">LinkedIn:</span></td>
        <td colspan="2">
          <a :href="value('linkedinbio')" target="_blank">{{
            value('linkedinbio')
          }}</a>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Work in US?</span></td>
        <td colspan="2">{{ value('usemploymenteligible') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Veteran:</span></td>
        <td colspan="2">{{ value('veteran') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Lead Sources:</span></td>
        <td colspan="2">{{ value('lead_sources') }}</td>
      </tr>
      <tr>
        <td colspan="3">
          <h2 class="has-border-top has-border-bottom">
            Education and Training
          </h2>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Education:</span></td>
        <td colspan="2">{{ value('education_label') }}</td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td colspan="2">{{ value('academicinstitutiondegrees') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Networking:</span></td>
        <td colspan="2">{{ value('computernetworkingproficiency_label') }}</td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td colspan="2">{{ value('networkingproficiencydetail') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Certifications:</span></td>
        <td colspan="2">{{ value('certificationstext') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Languages:</span></td>
        <td valign="top">HTML / CSS</td>
        <td valign="top">
          {{ value('htmlcss') }} - {{ value('htmlcssproficiency_label') }}
        </td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td valign="top">Linux Command Line</td>
        <td valign="top">
          {{ value('bash') }} - {{ value('bashproficiency_label') }}
        </td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td valign="top">Java / Javascript</td>
        <td valign="top">
          {{ value('javajavascript') }} -
          {{ value('javajavascriptproficiency_label') }}
        </td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td valign="top">C / C#</td>
        <td valign="top">
          {{ value('ccsharp') }} - {{ value('ccsharproficiency_label') }}
        </td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td valign="top">Python</td>
        <td valign="top">
          {{ value('python') }} - {{ value('pythonproficiency_label') }}
        </td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td valign="top">SQL/Ruby/PHP</td>
        <td valign="top">
          {{ value('sqlrubyphp') }} - {{ value('sqlrubyphpproficiency_label') }}
        </td>
      </tr>
      <tr>
        <td valign="top"></td>
        <td valign="top">Other</td>
        <td valign="top">
          {{ value('otherlanguages') }} -
          {{ value('otherlanguagesproficiency') }}
        </td>
      </tr>
      <tr>
        <td valign="top">
          <span class="label">Technology <br />Experience:</span>
        </td>
        <td valign="top">{{ value('technologyexperience') }}</td>
      </tr>
      <tr>
        <td colspan="3">
          <h2 class="has-border-top has-border-bottom">
            Employment Information
          </h2>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Employer:</span></td>
        <td valign="top" colspan="2">{{ value('latestemployername') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Location:</span></td>
        <td valign="top" colspan="2">{{ value('latestemployerlocation') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Job Title:</span></td>
        <td valign="top" colspan="2">{{ value('latestemployerjobtitle') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Salary:</span></td>
        <td valign="top" colspan="2">
          {{ value('latestemployersalary_label') }}
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Description:</span></td>
        <td valign="top" colspan="2">
          {{ value('latestemployerjobdescription') }}
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Date:</span></td>
        <td valign="top" colspan="2">
          {{ value('latestemployerstartdate') }} -
          {{ value('latestemployerenddate') }}
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="vertical-space"></div>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Employer:</span></td>
        <td valign="top" colspan="2">{{ value('employer2name') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Location:</span></td>
        <td valign="top" colspan="2">{{ value('employer2location') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Job Title:</span></td>
        <td valign="top" colspan="2">{{ value('employer2jobtitle') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Salary:</span></td>
        <td valign="top" colspan="2">{{ value('employer2salary_label') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Description:</span></td>
        <td valign="top" colspan="2">{{ value('employer2jobdescription') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Date:</span></td>
        <td valign="top" colspan="2">
          {{ value('employer2startdate') }} - {{ value('employer2enddate') }}
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="vertical-space"></div>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Employer:</span></td>
        <td valign="top" colspan="2">{{ value('employer3name') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Location:</span></td>
        <td valign="top" colspan="2">{{ value('employer3location') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Job Title:</span></td>
        <td valign="top" colspan="2">{{ value('employer3jobtitle') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Salary:</span></td>
        <td valign="top" colspan="2">{{ value('employer3salary_label') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Description:</span></td>
        <td valign="top" colspan="2">{{ value('employer3jobdescription') }}</td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Date:</span></td>
        <td valign="top" colspan="2">
          {{ value('employer3startdate') }} - {{ value('employer3enddate') }}
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <h2 class="has-border-top has-border-bottom">Essays</h2>
        </td>
      </tr>
      <tr>
        <td valign="top"><span class="label">Why Evolve?</span></td>
        <td valign="top" colspan="2">{{ value('whyevolve') }}</td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="vertical-space"></div>
        </td>
      </tr>
      <tr>
        <td valign="top">
          <span class="label">Exceeded <br />Expectations:</span>
        </td>
        <td valign="top" colspan="2">{{ value('exceededexpectations') }}</td>
      </tr>
      <tr>
        <td colspan="3">
          <div class="vertical-space"></div>
        </td>
      </tr>
      <tr>
        <td valign="top">
          <span class="label">Personal <br />Statement:</span>
        </td>
        <td valign="top" colspan="2">{{ value('personalstatement') }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Application',
  data() {
    return {
      getContactUrl:
        'https://prod-114.westus.logic.azure.com:443/workflows/824b5d92e2434fa0a80f424366b35467/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=dK6Q3ejtD-crNCbKq3d3riYpXoo8hxamYdm2BGkSKIA'
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
  font-family: sans-serif;
  font-size: 0.875rem;

  height: 100vh;
  overflow-y: scroll;
  padding: 1rem;
  .has-border-top {
    border-top: 1px solid black;
  }

  .has-border-bottom {
    border-bottom: 1px solid black;
  }

  .label {
    font-weight: bold;
  }

  table {
    width: 100%;
  }

  .vertical-space {
    height: 30px;
  }
}
</style>
