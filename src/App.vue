<template>
  <div class="p-8 flex justify-center">
    <family-tree :data="tudorFamily" :horizontal="false" :collapsable="true">
    </family-tree>
  </div>
</template>

<script>
export default {
  name: "App",
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
                label: "Arthur Tudor",
                dates: "1486 - 1502",
              },
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
