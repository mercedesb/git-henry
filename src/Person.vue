<template>
  <div :class="`flex flex-col items-center ${data.class}`">
    <img
      v-if="data.avatar"
      class="w-1/2 mr-2"
      :src="avatar"
      :alt="`Painting of ${data.label}`"
    />
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
  computed: {
    avatar() {
      return require(`@/assets/avatars/${this.data.avatar}`);
    },
  },
};
</script>
