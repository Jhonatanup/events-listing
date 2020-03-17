<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>{{ getEvent(1) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    getEvent() {
      return this.$store.getters.getEventById
    },
    ...mapState({
      user: 'user',
      categories: 'categories'
    })
  }
}
</script>

<style lang="scss" scoped></style>
