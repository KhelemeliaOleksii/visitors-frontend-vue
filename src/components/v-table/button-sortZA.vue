<template>
  <button type="button" class="button-sortZA" data-sort="ZA"></button>
</template>

<script>
export default {
  name: "button-sortZA",
  data: () => {
    return {};
  },
};
</script>

<style>
.button-sortZA {
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  transform: rotate(45deg);
  border-left: 1px solid #000000;
  border-top: 1px solid #000000;

  width: 7px;
  height: 7px;
  margin: auto 0;
}

.button-sortZA:hover {
  border-left: 2px solid #000000;
  border-top: 2px solid #000000;
}
</style>
