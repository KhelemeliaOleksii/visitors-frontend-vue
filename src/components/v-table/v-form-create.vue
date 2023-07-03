<template>
  <form class="form__create row g-3 needs-validation">
    <div class="col-md-5">
      <label for="name" class="form-label label__input"> First name </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John"
        autocomplete="off"
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
      />
    </div>
    <button type="submit" class="col-md-2 btn btn-primary">Create</button>
  </form>
</template>

<script>
export default {
  name: "v-form-create",
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style>
.form__create {
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
