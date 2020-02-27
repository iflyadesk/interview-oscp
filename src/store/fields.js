export default [
  {
    name: 'education_score',
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
    selectedValue: null
  },
  {
    name: 'tech_degree_score',
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
    selectedValue: null
  },
  {
    name: 'certifications_score',
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
    selectedValue: null
  },
  {
    name: 'coding_bootcamp_score',
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
    selectedValue: null
  },
  {
    name: 'tech_experience_score',
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
    selectedValue: null
  },
  {
    name: 'cybersecurity_skills_score',
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
    selectedValue: null
  },
  {
    name: 'punctuality_score',
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
    selectedValue: null
  },
  {
    name: 'zoom_preparedness_score',
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
    selectedValue: null
  },

  {
    name: 'attitude_score',
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
    selectedValue: null
  },
  {
    name: 'evolve_research_score',
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
    selectedValue: null
  },
  {
    name: 'alumni_referral_score',
    displayName: 'Alumni Referral',
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
    selectedValue: null
  },
  {
    name: 'career_urgency_score',
    displayName: 'Career Urgency',
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
    selectedValue: null
  },
  {
    name: 'understands_cybersecurity_score',
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
    selectedValue: null
  },
  {
    name: 'understands_networking_score',
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
    selectedValue: null
  },
  {
    name: 'understands_linux_score',
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
    selectedValue: null
  },
  {
    name: 'aptitude_score',
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
    selectedValue: null
  },

  {
    name: 'communication_score',
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
    selectedValue: null
  }
]
