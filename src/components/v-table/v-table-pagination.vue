<template>
  <nav class="v-table-pagination" aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="page in pages_data"
        :key="page"
        @click="pageClick(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "v-table-pagination",
  props: {
    pages_data: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    current_page: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    pageClick(page) {
      this.$emit("pageClick", page);
    },
  },
};
</script>

<style>
.v-table-pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4px;
  margin: 0 auto;
  margin-top: 15px;
}
</style>
