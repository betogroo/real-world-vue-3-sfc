<script setup lang="ts">
import type { Event } from '../views/EventsView.vue'

interface Props {
  event: Event
}
defineProps<Props>()
</script>

<template>
  <v-card
    class="ma-2"
    hover
    variant="outlined"
    width="250"
  >
    <v-card-title>{{ event.title }}</v-card-title>
    <v-card-text>{{ event.time }} em {{ event.date }}</v-card-text>
  </v-card>
</template>
