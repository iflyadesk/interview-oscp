import Vue from 'vue'
import Vuex from 'vuex'
import fields from './fields'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contact: {},
    dirty: { properties: [] },
    fields: fields
  },
  mutations: {
    setContact(state, contact) {
      state.contact = contact
      state.fields.forEach(field => {
        let contactValue = this.getters.contactValue(field.name)
        if (!isNaN(parseInt(contactValue))) {
          field.selectedValue = parseInt(contactValue)
        }
      })
    },
    setField(state, updated) {
      let field = state.fields.find(f => f.name == updated.name)
      if (field) {
        field = updated
      }
    },
    setProperty(state, { name, value }) {
      if (!state.contact.properties[name]) {
        state.contact.properties[name] = {}
      }
      state.contact.properties[name].value = value

      // stage changes for posting back to Hubspot
      let dirtyProperty = state.dirty.properties.find(p => p.property === name)
      if (!dirtyProperty) {
        state.dirty.properties.push({ property: name, value })
      } else {
        dirtyProperty.value = value
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
    fields: state => state.fields,
    properties: state => state.dirty.properties
  },
  actions: {
    setContact(context, contact) {
      context.commit('setContact', contact)
    },
    setField(context, field) {
      context.commit('setField', field)
      context.commit('setProperty', {
        name: field.name,
        value:
          field.selecteValue == null ? null : field.selectedValue.toString()
      })
    },
    setProperty(context, { name, value }) {
      context.commit('setProperty', { name, value })
    }
  }
})
