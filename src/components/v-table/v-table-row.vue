<template>
  <tr
    class="v-table__body table-secondary"
    :data-itemid="row_data.id"
    @click="onActionClick($event)"
  >
    <td class="row__number">{{ row_number }}</td>
    <td class="row__name">{{ row_data.name }}</td>
    <td class="row__lastname">{{ row_data.surname }}</td>
    <td class="row__enteredAt">
      {{ row_data.enteredAt ? row_data.enteredAt : "" }}
    </td>
    <td class="row__actions">
      <ButtonUpdate />
      <ButtonRemove />
    </td>
  </tr>
</template>

<script>
import ButtonRemove from "./button-remove.vue";
import ButtonUpdate from "./button-update.vue";

export default {
  name: "v-table-row",
  components: {
    ButtonRemove,
    ButtonUpdate,
  },
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    row_number: {
      type: Number,
      default: () => {
        return 0;
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    onActionClick(event) {
      this.$emit("actionClick", event);
    },
  },
  computed: {},
};
</script>

<style>
.v-table__body {
  height: 35px;
}
.v-table__body td:first-of-type {
  width: 30px;
}
</style>
