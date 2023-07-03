<template>
  <button type="button" class="btn btn-primary btn-create" @click="onClick">
    Create
  </button>
</template>

<script>
export default {
  name: "button-create",
  data: () => {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("createClick");
    },
  },
};
</script>

<styles>
    .btn-create{
        margin: 0 auto;
    }
</styles>
