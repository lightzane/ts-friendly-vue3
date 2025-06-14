<script setup lang="ts">
import { onMounted, ref } from 'vue';

import fetchCount from '@/services/fetchCount';

type Props = {
    limit: number;
    alertMessageOnLimit?: string; // if optional, then add `withDefaults()` on defineProps
};

// Compiler macro
// = `defineProps()`, 'withDefaults()' and more...
// = These are only executed in compile-time
// = no need to be imported.
// = can ONLY BE USED inside a "script setup" block
const props = withDefaults(defineProps<Props>(), {
    alertMessageOnLimit: 'Max limit is reached.'
})

const count = ref<number | null>(null);

onMounted(() => {
    fetchCount((initialCount) => {
        count.value = initialCount;
    });
});

function addCount() {
    if (count.value === null) {
        return;
    }

    if (count.value >= props.limit) {
        alert(props.alertMessageOnLimit);
    } else {
        count.value++;
    }

}
</script>

<template>
    <div>
        <p>{{ count }}</p>
        <p>
            <button @click="addCount">Add</button>
        </p>
    </div>
</template>