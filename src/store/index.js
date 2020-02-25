import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contact: {},
    fields: [
      {
        name: 'punctuality',
        displayName: 'Interview Punctuality',
        choices: [
          {
            label: 'No show',
            value: 0
          },
          {
            label: 'Delayed',
            value: 1
          },
          {
            label: 'On-time',
            value: 5
          }
        ],
        note:
          'Enthusiasm for the bootcamp can be judged by the punctuality of the candidate.',
        selectedValue: 0
      },
      {
        name: 'zoom_preparedness',
        displayName: 'Interview Zoom Preparedness',
        choices: [
          {
            label: 'None Fixed',
            value: 0
          },
          {
            label: 'Some Fixed',
            value: 5
          },
          {
            label: 'All Technical Errors Fixed',
            value: 10
          },
          {
            label: 'Prepared',
            value: 15
          }
        ],
        note:
          'Sometimes candidates cannot troubleshoot zoom on their computers or phones. It is a good indicator of their performance in the bootcamp and general aptitude for technology.',
        selectedValue: 0
      },
      {
        name: 'education_background',
        displayName: 'Education Background',
        choices: [
          {
            label: 'No Formal Education',
            value: 0
          },
          {
            label: 'High School',
            value: 2
          },
          {
            label: 'Associates',
            value: 3
          },
          {
            label: 'Bachelors or Higher',
            value: 5
          }
        ],
        note:
          'Education background is not a significant indicator of success in the bootcamp.',
        selectedValue: 0
      },
      {
        name: 'tech_degree',
        displayName: 'Degree in Technology',
        choices: [
          {
            label: 'No Formal Education',
            value: 0
          },
          {
            label: 'High School',
            value: 2
          },
          {
            label: 'Associates',
            value: 3
          },
          {
            label: 'Bachelors or Higher',
            value: 5
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_certifications',
        displayName: 'Cybersecurity Certification(s)',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'At least one',
            value: 5
          },
          {
            label: 'Two or more',
            value: 10
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_codingbootcamp',
        displayName: 'Coding Bootcamp',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'Attended',
            value: 5
          },
          {
            label: 'Completed',
            value: 7
          },
          {
            label: 'Project submitted',
            value: 10
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_technicalworkexperience',
        displayName: 'Technical Work Experience',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'Novice',
            value: 5
          },
          {
            label: 'Intermediate',
            value: 10
          },
          {
            label: 'Advanced',
            value: 15
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_attitude',
        displayName: 'Attitude Indicator',
        choices: [
          {
            label: 'Not a good attitude',
            value: 0
          },
          {
            label: 'Good Attitude',
            value: 5
          },
          {
            label: 'Great Attitude ',
            value: 10
          }
        ],
        note:
          'Interview Question: Tell me about your self. Look for passion/curiosity/positive attitude/eagerness.',
        selectedValue: 0
      },
      {
        name: 'es_evolveresearch',
        displayName: 'Evolve Research Indicator',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'OK',
            value: 5
          },
          {
            label: 'Good',
            value: 10
          },
          {
            label: 'Excellent',
            value: 15
          }
        ],
        note: 'Interview Question: Why did you choose Evolve?',
        selectedValue: 0
      },
      {
        name: 'es_alumnireferral',
        displayName: 'Alum Referral',
        choices: [
          {
            label: 'No',
            value: 0
          },
          {
            label: 'Yes',
            value: 10
          }
        ],
        note:
          'Candidates that have been referred by an alum are better prepared and have a good understanding of the bootcamp requirements. Sometimes candidates do not indicate that they were referred by an alum in the application, but mention it in the interview.',
        selectedValue: 0
      },
      {
        name: 'es_desperation',
        displayName: 'Career Urgency Score',
        choices: [
          {
            label: 'Very Urgent',
            value: 0
          },
          {
            label: 'Some Urgency',
            value: 3
          },
          {
            label: 'No Urgency',
            value: 5
          }
        ],
        note:
          'Interview Question: What do you plan to do after graduation from the bootcamp?',
        selectedValue: 0
      },
      {
        name: 'es_knowscybersecurity',
        displayName: 'Understanding of Cybersecurity Concepts',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'OK',
            value: 5
          },
          {
            label: 'Good',
            value: 10
          },
          {
            label: 'Excellent',
            value: 15
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_knowsnetworking',
        displayName: 'Understanding of Networking Concepts',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'OK',
            value: 5
          },
          {
            label: 'Good',
            value: 10
          },
          {
            label: 'Excellent',
            value: 15
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_knowslinux',
        displayName: 'Understanding of Linux Concepts',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'OK',
            value: 5
          },
          {
            label: 'Good',
            value: 10
          },
          {
            label: 'Excellent',
            value: 15
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_aptitude',
        displayName: 'Aptitude for Learning',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'OK',
            value: 5
          },
          {
            label: 'Good',
            value: 10
          },
          {
            label: 'Excellent',
            value: 15
          }
        ],
        note:
          'Interview Question: Tell me about a time when you had to learn something new for work. Candidate can also talk about home technology projects and labs.',
        selectedValue: 0
      },
      {
        name: 'es_cybersecurityskills',
        displayName: 'Cybersecurity Skills',
        choices: [
          {
            label: 'None',
            value: 0
          },
          {
            label: 'Novice',
            value: 5
          },
          {
            label: 'Intermediate',
            value: 10
          },
          {
            label: 'Advanced',
            value: 15
          }
        ],
        note: '',
        selectedValue: 0
      },
      {
        name: 'es_communication',
        displayName: 'Communication Skills',
        choices: [
          {
            label: 'Needs Improvement',
            value: 0
          },
          {
            label: 'OK',
            value: 2
          },
          {
            label: 'Good',
            value: 3
          },
          {
            label: 'Excellent',
            value: 5
          }
        ],
        note: '',
        selectedValue: 0
      }
    ]
  },
  mutations: {
    setContact(state, contact) {
      state.contact = contact
      state.fields.forEach(field => {
        console.log('field.name', field.name)
        console.log('field.selectedValue (old)', field.selectedValue)
        let contactValue = this.getters.contactValue(field.name)
        console.log('contactValue', contactValue)
        if (!isNaN(parseInt(contactValue))) {
          field.selectedValue = parseInt(contactValue)
          console.log('field.selectedValue (new)', field.selectedValue)
        }
      })
    },
    setField(state, updated) {
      let field = state.fields.find(f => f.name == updated.name)
      if (field) {
        field = updated
      }
    }
  },
  getters: {
    contact: state => state.contact,
    contactValue: state => field => {
      if (
        state.contact &&
        state.contact.properties &&
        state.contact.properties[field]
      ) {
        return state.contact.properties[field].value
      } else {
        return ''
      }
    },
    fields: state => state.fields
  },
  actions: {
    setContact(context, contact) {
      context.commit('setContact', contact)
    },
    setField(context, field) {
      context.commit('setField', field)
    }
  }
})
