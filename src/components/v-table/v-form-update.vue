<template>
  <form class="form__update row g-3 needs-validation">
    <div class="col-md-5">
      <label for="name" class="form-label label__input"> First name </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John"
        autocomplete="off"
        :value="visitor_data.name"
        class="form-control"
      />
    </div>
    <div class="col-md-5">
      <label for="surname" class="label__input"> Last name </label>
      <input
        id="name"
        name="surname"
        type="text"
        placeholder="Doe"
        autocomplete="off"
        class="form-control"
        :value="visitor_data.surname"
      />
    </div>
    <button type="submit" class="col-md-2 btn btn-primary">Update</button>
  </form>
</template>

<script>
export default {
  name: "v-form-update",
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
  methods: {},
};
</script>

<style>
.form__update {
  margin-bottom: 20px;
}
.label__input {
  position: absolute;
  transform: translate(0%, -75%);
  background-color: white;
  padding: 0 5px;
  margin: 0;
}
</style>
