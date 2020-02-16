<template>
    <div class="scores">
        <div class="total">
            <h4>Total Score: {{ total() }}</h4>
            <b-progress
                class="progress"
                :type="progressType()"
                :value="progressValue()"
                size="is-large"
            ></b-progress>
        </div>
        <div
            class="score"
            v-for="(field, idx) in fields"
            :key="idx"
            :field="field"
        >
            <h4>{{ field.displayName }}: {{ field.selectedValue }}</h4>
            <p class="note">{{ field.note }}</p>
            <b-field>
                <b-radio-button
                    v-for="(choice, idx) in field.choices"
                    :key="idx"
                    v-model="field.selectedValue"
                    :native-value="choice.value"
                    :type="choiceType(field, choice)"
                >
                    <span>{{ choice.label }}</span>
                </b-radio-button>
            </b-field>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Scores',
    data: function() {
        return {
            fields: [
                {
                    name: 'es_punctuality',
                    displayName: 'Interview Punctuality',
                    choices: [
                        { label: 'No show', value: 0 },
                        { label: 'Delayed', value: 1 },
                        { label: 'On-time', value: 5 }
                    ],
                    note:
                        'Enthusiasm for the bootcamp can be judged by the punctuality of the candidate.',
                    selectedValue: 0
                },
                {
                    name: 'es_zoompreparedness',
                    displayName: 'Interview Zoom Preparedness',
                    choices: [
                        { label: 'None Fixed', value: 0 },
                        { label: 'Some Fixed', value: 5 },
                        { label: 'All Technical Errors Fixed', value: 10 },
                        { label: 'Prepared', value: 15 }
                    ],
                    note:
                        'Sometimes candidates cannot troubleshoot zoom on their computers or phones. It is a good indicator of their performance in the bootcamp and general aptitude for technology.',
                    selectedValue: 0
                },
                {
                    name: 'es_degree',
                    displayName: 'Education Background',
                    choices: [
                        { label: 'No Formal Education', value: 0 },
                        { label: 'High School', value: 2 },
                        { label: 'Associates', value: 3 },
                        { label: 'Bachelors or Higher', value: 5 }
                    ],
                    note:
                        'Education background is not a significant indicator of success in the bootcamp.',
                    selectedValue: 0
                },
                {
                    name: 'es_techdegree',
                    displayName: 'Degree in Technology',
                    choices: [
                        { label: 'No Formal Education', value: 0 },
                        { label: 'High School', value: 2 },
                        { label: 'Associates', value: 3 },
                        { label: 'Bachelors or Higher', value: 5 }
                    ],
                    note: '',
                    selectedValue: 0
                }
            ]
        }
    },
    methods: {
        total() {
            return this.fields
                .map(f => f.selectedValue)
                .reduce((a, b) => {
                    return a + b
                }, 0)
        },
        maxValue() {
            return this.fields
                .map(f => Math.max(...f.choices.map(c => c.value)))
                .reduce((a, b) => {
                    return a + b
                }, 0)
        },
        progressValue() {
            return (this.total() / this.maxValue()) * 100
        },
        progressType() {
            if (this.progressValue() < 33) {
                return 'is-danger'
            } else if (this.progressValue() < 67) {
                return 'is-warning'
            } else {
                return 'is-success'
            }
        },
        choiceType(field, choice) {
            let maxValue = Math.max(...field.choices.map(c => c.value))
            let percentile = (choice.value / maxValue) * 100
            if (percentile < 33) {
                return 'is-danger'
            } else if (percentile < 67) {
                return 'is-warning'
            } else {
                return 'is-success'
            }
        }
    },
    created() {
        if (!window.location.href.includes('localhost')) {
            this.page = parent.Xrm.Page
            this.fields.forEach(field => {
                field.selectedValue = this.page.getAttribute(field.name)
            })
        }
    },
    watch: {
        fields: {
            deep: true,
            handler(fields) {
                if (!window.location.href.includes('localhost')) {
                    fields.forEach(field => {
                        this.page
                            .getAttribute(field.name)
                            .setValue(field.selectedValue)
                    })
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.scores {
    border-left: 1px solid;
    padding: 10px 10px 10px 30px;
    .progress {
        margin: 0 0 20px 0;
        width: 80%;
    }
    h4 {
        font-weight: bold;
    }
    p.note {
        font-style: italic;
        font-size: 14px;
        line-height: 1;
    }
    .field {
        margin: 10px 0 20px 0;
    }
}
</style>
