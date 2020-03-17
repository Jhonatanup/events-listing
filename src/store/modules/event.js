import EventService from '@/services/EventService.js'
export const namespaced = true

export const state = {
  events: [],
  event: {}
}

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id)

    if (event) {
      commit('SET_EVENT', event)
    } else {
      EventService.getEvent(id)
        .then(result => {
          commit('SET_EVENT', result.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
export const getters = {
  getEventById: state => id => {
    return state.events.find(events => events.id === id)
  }
}
