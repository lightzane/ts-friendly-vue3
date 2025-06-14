<script setup lang="ts">
/**
 * @param event name of event
 * @param num payload data
 */
interface Emits {
  (event: 'add-count', num: number): void;
  (event: 'reset-count'): void;
}
// Compiler macro
// = `defineProps()`, 'withDefaults()', 'defineEmits()' and more...
// = These are only executed in compile-time
// = no need to be imported.
// = can ONLY BE USED inside a "script setup" block
const emit = defineEmits<Emits>();
</script>

<template>
  <p>
    <button @click="emit('add-count', 1)">Add</button>
    <button @click="emit('reset-count')">Reset</button>
  </p>
</template>
