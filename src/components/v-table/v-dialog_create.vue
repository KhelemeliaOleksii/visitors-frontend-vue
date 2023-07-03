<template>
  <dialog id="dialog-create" class="dialog-create">
    <h2 class="dialog-create__header">Create a visitor</h2>

    <VFormCreate @submit="submitCreate" />

    <button
      type="button"
      class="btn btn-secondary btn--bgcolor"
      id="close-modal"
      @click="closeDialog"
    >
      Close modal
    </button>
  </dialog>
</template>

<script>
import VFormCreate from "./v-form-create.vue";

export default {
  name: "v-dialog-create",
  data: () => {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialogCreate");
    },
    submitCreate(event) {
      event.preventDefault();
      this.$emit("submit-create", event);
    },
  },
  components: { VFormCreate },
};
</script>

<style>
.dialog-create {
  border: none;
  border-radius: 6px;
  padding: 25px;
  margin: auto;
}
.dialog-create__header {
  margin-bottom: 30px;
}
.dialog-create__form {
  margin-bottom: 30px;
}
.btn--bgcolor {
  background-color: rgba(0, 0, 0, 0.15);
  color: black;
  border: none;
}
</style>
