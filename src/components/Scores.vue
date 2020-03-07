<template>
  <div class="scores">
    <div class="columns">
      <div class="column">
        <GIBill class="score" />
      </div>
    </div>

    <!-- list of fields from fields  -->
    <div
      class="columns"
      v-for="(field, idx) in fields"
      :key="idx"
      :field="field"
    >
      <div class="column">
        <div class="score">
          <label class="label">
            {{ field.displayName }}: {{ field.selectedValue }} of
            {{ maxValue(field) }}
            <span
              class="clear-field"
              v-if="field.selectedValue != null"
              @click="clearField(field)"
              >[x]</span
            >
          </label>
          <div class="choice">
            <p class="note">{{ field.note }}</p>
            <b-field>
              <b-radio-button
                v-for="(choice, idx) in field.choices"
                :key="idx"
                v-model="field.selectedValue"
                :native-value="choice.value"
                :type="choiceType(field, choice)"
                size="is-small"
                @input="setField(field)"
              >
                <span>{{ choice.label }}</span>
              </b-radio-button>
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <!-- end of list of fields from fields  -->

    <div class="columns">
      <div class="column">
        <Bootcamp class="score" />
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <RequireFundamentals class="score" />
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <SkillsAssessment class="score" />
      </div>
    </div>
  </div>
</template>

<script>
import GIBill from './GIBill'
import Bootcamp from './Bootcamp'
import RequireFundamentals from './RequireFundamentals'
import SkillsAssessment from './SkillsAssessment'

export default {
  name: 'Scores',
  methods: {
    setField(field) {
      this.$store.dispatch('setField', field)
    },
    clearField(field) {
      field.selectedValue = null
      this.$store.dispatch('setField', field)
    },
    maxValue(field) {
      if (!field) {
        return this.fields
          .map(f => Math.max(...f.choices.map(c => c.value)))
          .reduce((a, b) => {
            return a + b
          }, 0)
      }
      return Math.max(...field.choices.map(c => c.value))
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
  computed: {
    fields() {
      return this.$store.getters.fields
    }
  },
  components: {
    GIBill,
    Bootcamp,
    RequireFundamentals,
    SkillsAssessment
  }
}
</script>

<style lang="scss">
.scores {
  overflow-y: scroll;
  height: calc(100vh - 285px);
  padding: 1rem 1rem 3rem 1rem;

  .score {
    .clear-field {
      color: #aaa;
      font-weight: normal;
      cursor: pointer;
    }
    .choice {
      p.note {
        font-style: italic;
        font-size: 14px;
        line-height: 1;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
