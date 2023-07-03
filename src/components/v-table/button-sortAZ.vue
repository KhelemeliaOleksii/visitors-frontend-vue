<template>
  <button type="button" class="button-sortAZ" data-sort="AZ"></button>
</template>

<script>
export default {
  name: "button-sortAZ",
  data: () => {
    return {};
  },
};
</script>

<style>
.button-sortAZ {
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  transform: rotate(-45deg);
  border-left: 1px solid #000000;
  border-bottom: 1px solid #000000;
  width: 7px;
  height: 7px;
  margin: auto;
}
.button-sortAZ:hover {
  border-left: 2px solid #000000;
  border-bottom: 2px solid #000000;
}
</style>
