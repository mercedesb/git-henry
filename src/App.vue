<template>
  <div class="p-8 flex justify-center">
    <family-tree :data="tudorFamily" :horizontal="false" :collapsable="true">
      <template #node="{data}">
        <Person :data="data" />
      </template>
    </family-tree>
  </div>
</template>

<script>
import Person from "./Person.vue";

export default {
  name: "App",
  components: { Person },
  data() {
    return {
      tudorFamily: {
        label: "Tudor Dynasty",
        children: [
          {
            label: "Henry VII",
            dates: "1457 - 1509",
            children: [
              {
                label: "Catherine of Aragon",
                dates: "1485 - 1536",
              },
            ],
          },
          {
            label: "Elizabeth of York",
            dates: "1466 - 1503",
          },
        ],
      },
    };
  },
};
</script>
