<template>
  <tr class="v-table__header table-secondary" @click="onClick($event)">
    <th scope="col">#</th>
    <th scope="col" class="th__name" data-name="name">
      <ButtonSortAZ />
      <span class="th__span">Name</span>
      <ButtonSortZA />
    </th>
    <th scope="col" class="th__name" data-name="surname">
      <ButtonSortAZ />
      <span class="th__span">Last Name</span>
      <ButtonSortZA />
    </th>
    <th scope="col" class="th__name" data-name="enteredAt">
      <ButtonSortAZ />
      <span class="th__span">Registration day</span>
      <ButtonSortZA />
    </th>
    <th scope="col" class="th__name">
      <span class="th__span">Actions</span>
    </th>
  </tr>
</template>

<script>
import ButtonSortAZ from "./button-sortAZ.vue";
import ButtonSortZA from "./button-sortZA.vue";

export default {
  name: "v-table-header",
  components: {
    ButtonSortAZ,
    ButtonSortZA,
  },
  data: () => {
    return {};
  },
  methods: {
    onClick(event) {
      this.$emit("sortClick", event);
    },
  },
};
</script>

<style>
.th__span {
  margin: 0 5px;
}
</style>
