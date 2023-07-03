<template>
  <dialog id="dialog-remove" class="dialog-remove">
    <h2 class="dialog-remove__header">DELETE the visitor</h2>
    <p class="dialog-remove__paragraph">If you are sure press "Submit"</p>
    <button
      type="button"
      id="close-modal"
      class="btn btn-secondary btn--bgcolor"
      @click="closeDialog"
    >
      Close modal
    </button>
    <button
      type="button"
      id="close-modal"
      class="btn btn-primary btn--bgcolor"
      @click="submitRemove"
    >
      Submit
    </button>
  </dialog>
</template>

<script>
export default {
  name: "v-dialog-remove",
  data: () => {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialogRemove");
    },
    submitRemove(event) {
      this.$emit("submitRemove", event);
    },
  },
};
</script>

<style>
.dialog-remove {
  border: none;
  border-radius: 6px;
  padding: 25px;
  margin: auto;
}
.dialog-remove__header {
  margin-bottom: 30px;
}
.dialog-remove__paragraph {
  margin-bottom: 30px;
}
.btn--bgcolor:first-of-type {
  background-color: rgba(0, 0, 0, 0.15);
  color: black;
  border: none;
  margin-right: 30px;
}
</style>
