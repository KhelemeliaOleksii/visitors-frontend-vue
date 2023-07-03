<template>
  <div class="wrapper">
    <vTable :visitors_data="VISITORS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vTable from "./components/v-table/v-table.vue";

export default {
  name: "app",
  components: {
    vTable,
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["VISITORS"]),
  },
  methods: {
    ...mapActions(["GET_VISITORS_FROM_API"]),
  },
  mounted() {
    this.GET_VISITORS_FROM_API();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
