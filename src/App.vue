<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { useDeliveryStore } from './store'
const store = useDeliveryStore()
const { approvedShare, offers, urgent } = storeToRefs(store)
onMounted(store.load)
</script>

<template><div class="shell"><aside><div class="brand">ConnectBlackSea<span>DELIVERY PROJECTS</span></div><nav><RouterLink to="/">Connectivity projects</RouterLink><RouterLink to="/insights">Delivery guidance</RouterLink></nav><div class="health"><i /> Java connectivity service connected</div></aside><main><header><div><span class="eyebrow">Coordinate secure, reliable and resilient digital routes from Europe to Central Asia</span><h1>Black Sea Digital Connectivity Desk</h1></div><button @click="store.addOffer">Add connectivity project</button></header><section class="summary"><article><small>Projects approved</small><strong>{{ approvedShare }}%</strong><div class="bar"><span :style="{ width: `${approvedShare}%` }" /></div></article><article><small>Projects tracked</small><strong>{{ offers.length }}</strong><p>Shared corridor view</p></article><article><small>Urgent route gaps</small><strong>{{ urgent }}</strong><p>Needs attention</p></article></section><RouterView /></main></div></template>
