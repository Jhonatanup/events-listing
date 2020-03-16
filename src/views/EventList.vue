<template>
  <div>
    <h1>Events Listing</h1>
    // eslint-disable-next-line prettier/prettier
    <router-link :to="{ name: 'event-show', params: { id: '1' } }"
      >Show Event #1</router-link
    >
    |
  </div>
</template>
