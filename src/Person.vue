<template>
  <div
    :class="[
      'flex flex-col items-center px-4 py-2',
      { 'border-2 border-lemon-700': data.ending === 'Divorced' },
      { 'border-2 border-coral-900': data.ending === 'Beheaded' },
      { 'border-2 border-flint-700': data.ending === 'Died' },
    ]"
  >
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
      <br v-if="data.aka" />
      <em v-if="data.aka" class="text-primary-300">({{ data.aka }})</em>
    </div>
    <div v-if="data.ending" class="text-lg font-light">
      {{ data.ending }}
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
