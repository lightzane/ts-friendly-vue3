<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

import fetchCount from '@/services/fetchCount';

interface AppInfo {
  name: string,
  slogan: string
}

// * Type Inference
// const count = ref(0) // Inferred type: Ref<number>
const count = ref<number | null>(null) // Inferred type: null, hence, specify via type annotation

// * Type Annotation (i.e. AppInfo)
const appInfo: AppInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})

onMounted(()=>{
  fetchCount((initialCount)=>{
    count.value = initialCount
  })
})
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
    <p>{{ count }}</p>
  </div>
</template>