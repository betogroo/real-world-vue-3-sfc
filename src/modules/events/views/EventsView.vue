<script setup lang="ts">
import { EventCard } from '../components'

import { ref } from 'vue'

export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed?: boolean
  organizer: string
}

const events = ref<Event[]>([
  {
    id: 233435,
    category: 'animais',
    title: 'Adoção de Gatos',
    description: 'Encontre seu gatinho aqui e tenha um novo amigo',
    location: 'São Joaquim da Barra',
    date: '15/11/2023',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Muizinha dos Gatos',
  },
  {
    id: 74577,
    category: 'animais',
    title: 'Adoção de Cachorros',
    description: 'Encontre seu doguinho aqui e tenha um novo amigo',
    location: 'São Joaquim da Barra',
    date: '15/11/2023',
    time: '14:00',
    petsAllowed: true,
    organizer: 'Muizinha dos Gatos',
  },
  {
    id: 85985,
    category: 'doces',
    title: 'Venda de doces',
    description: 'Ajude as crianças comprando doces',
    location: 'São Joaquim da Barra',
    date: '16/11/2023',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Mina dos Doces',
  },
])
</script>
<template>
  <v-container class="d-flex justify-center">
    <div>
      <h1 class="text-h1 text-center">Events</h1>
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
      />
    </div>
  </v-container>
</template>
