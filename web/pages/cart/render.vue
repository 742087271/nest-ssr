<template>
  <div>
    test
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '@/pinia-store'
const indexStore = useCartStore()
console.log(indexStore)

</script>
