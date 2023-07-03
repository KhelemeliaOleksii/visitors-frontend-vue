<template>
  <button type="button" class="btn btn-danger btn-sm" data-btntype="remove">
    Delete
  </button>
</template>

<script>
export default {
  name: "button-remove",
  data: () => {
    return {};
  },
};
</script>

<style>
.action__btn {
  cursor: pointer;
}
</style>
