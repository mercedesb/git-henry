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
import Person from "./Person";

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
                label: "Henry VIII",
                dates: "1491 - 1547",
                class: "text-3xl",
              },
              {
                label: "Catherine of Aragon",
                dates: "1485 - 1536",
                married: "1509 - 1533",
                avatar: "catherine_of_aragon.jpeg",
                ending: "Divorced",
                children: [
                  {
                    label: "Mary Tudor",
                    aka: "Mary I aka Bloody Mary",
                  },
                ],
              },
              {
                label: "Anne Boleyn",
                dates: "1501 - 1536",
                married: "1533 - 1536",
                avatar: "anne_boleyn.jpeg",
                ending: "Beheaded",
                children: [{ label: "Elizabeth Tudor", aka: "Elizabeth I" }],
              },
              {
                label: "Jane Seymour",
                dates: "1508 - 1537",
                married: "1536 - 1537",
                avatar: "jane_seymour.jpeg",
                ending: "Died",
                children: [{ label: "Edward Tudor", aka: "Edward VI" }],
              },
              {
                label: "Anne of Cleves",
                dates: "1515 - 1557",
                married: "1540 - 1540",
                avatar: "anne_of_cleves.jpeg",
                ending: "Divorced",
              },
              {
                label: "Catherine Howard",
                dates: "1520 - 1542",
                married: "1540 - 1542",
                avatar: "catherine_howard.jpeg",
                ending: "Beheaded",
              },
              {
                label: "Catherine Parr",
                dates: "1512 - 1548",
                married: "1543 - 1547",
                avatar: "catherine_parr.jpeg",
                ending: "Survived",
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
