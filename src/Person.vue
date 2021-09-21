<template>
  <div>
    <div>
      <strong class="text-primary-500">
        {{ data.label }}
      </strong>
    </div>
    <div class="text-sm">{{ data.dates }}</div>
    <div v-if="data.married" class="text-sm">Married: {{ data.married }}</div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
