<template>
  <div class="scores">
    <div class="score"
         v-for="(field, idx) in fields"
         :key="idx"
         :field="field">
      <h4>
        {{ field.displayName }}: {{ field.selectedValue }} of
        {{ maxValue(field) }}
      </h4>
      <div class="choice">
        <p class="note">{{ field.note }}</p>
        <b-field>
          <b-radio-button v-for="(choice, idx) in field.choices"
                          :key="idx"
                          v-model="field.selectedValue"
                          :native-value="choice.value"
                          :type="choiceType(field, choice)"
                          size="is-small">
            <span>{{ choice.label }}</span>
          </b-radio-button>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scores',
  methods: {
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
  }
}
</script>

<style lang="scss">
.scores {
  border-left: 1px solid #999;
  position: relative;
  overflow-y: scroll;
  height: 100vh;

  h4 {
    font-weight: bold;
    line-height: 1.2;
  }
  .score {
    padding: 1rem;
    .choice {
      padding: 0 10px;
      p.note {
        font-style: italic;
        font-size: 14px;
        line-height: 1;
      }
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
    }
  }
}
</style>
