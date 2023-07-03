<template>
  <dialog id="dialog-update" class="dialog-update">
    <h2 class="dialog-update__header">Update the visitor</h2>

    <VFormUpdate :visitor_data="visitor_data" @submit="submitUpdate" />

    <button
      type="button"
      id="close-modal"
      class="btn btn-secondary btn--bgcolor"
      @click="closeDialog"
    >
      Close modal
    </button>
  </dialog>
</template>

<script>
import VFormUpdate from "./v-form-update.vue";

export default {
  name: "v-dialog-create",
  data: () => {
    return {};
  },
  props: {
    visitor_data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialogUpdate");
    },
    submitUpdate(event) {
      event.preventDefault();
      this.$emit("submit-update", event);
    },
  },
  components: { VFormUpdate },
};
</script>

<style>
.dialog-update {
  border: none;
  border-radius: 6px;
  padding: 25px;
  margin: auto;
}
.dialog-update__header {
  margin-bottom: 30px;
}
.dialog-update__form {
  margin-bottom: 30px;
}
.btn--bgcolor {
  background-color: rgba(0, 0, 0, 0.15);
  color: black;
  border: none;
}
</style>
