<template>
  <table class="v-table">
    <VTableHeader @sort-click="sortClick" />
    <VTableRow
      v-for="(row, index) in paginatedVisitors"
      :key="row.id"
      :row_data="row"
      :row_number="index + rowNumberFrom"
      @action-click="actionClick"
    />
    <VTableStubRow
      v-if="isNeedStubs"
      v-for="(row, index) in createStubs"
      :key="index"
    />
  </table>
  <VTablePagination
    :pages_data="pages"
    :current_page="pageNumber"
    @page-click="pageClick"
  />

  <Button_create @create-click="openCreateDialog" />
  <VDialog_create
    @close-dialog-create="closeCreateDialog"
    @submit-create="submitCreate"
  />
  <VDialog_update
    :visitor_data="updatedVisitor"
    @close-dialog-update="closeUpdateDialog"
    @submit-update="submitUpdate"
  />
  <VDialog_remove
    @close-dialog-remove="closeRemoveDialog"
    @submit-remove="submitRemove"
  />
</template>
<script>
import VTableRow from "./v-table-row.vue";
import VTableStubRow from "./v-table-stubrow.vue";
import VTablePagination from "./v-table-pagination.vue";
import VTableHeader from "./v-table-header.vue";
import Button_create from "./button_create.vue";
import VDialog_create from "./v-dialog_create.vue";
import VDialog_update from "./v-dialog_update.vue";
import VDialog_remove from "./v-dialog_remove.vue";

export default {
  name: "v-table",
  components: {
    VTableStubRow,
    VTableRow,
    VTablePagination,
    VTableHeader,
    Button_create,
    VDialog_create,
    VDialog_update,
    VDialog_remove,
  },
  props: {
    visitors_data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      visitorsPerPage: 5,
      pageNumber: 1,
      updatedVisitor: {
        name: null,
        surname: null,
        id: null,
        enteredAt: null,
      },
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.visitors_data.length / 5);
    },
    paginatedVisitors() {
      let from = (this.pageNumber - 1) * this.visitorsPerPage;
      let to = from + this.visitorsPerPage;
      return this.visitors_data.slice(from, to);
    },
    rowNumberFrom() {
      return (this.pageNumber - 1) * this.visitorsPerPage + 1;
    },
    isNeedStubs() {
      const stubNumber = this.visitorsPerPage - this.paginatedVisitors.length;
      if (stubNumber > 0 && stubNumber < this.visitorsPerPage) {
        return true;
      } else {
        return false;
      }
    },
    createStubs() {
      const stubNumber = this.visitorsPerPage - this.paginatedVisitors.length;
      return new Array(stubNumber).fill(null);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortClick(event) {
      if (event.target.dataset.sort === "AZ") {
        const sortby = event.target.parentElement.dataset.name;
        this.visitors_data.sort((a, b) => a[sortby].localeCompare(b[sortby]));
      }
      if (event.target.dataset.sort === "ZA") {
        const sortby = event.target.parentElement.dataset.name;
        this.visitors_data.sort((a, b) => b[sortby].localeCompare(a[sortby]));
      }
    },
    actionClick(event) {
      const btntype = event.target.dataset.btntype;
      if (btntype === "remove") {
        this.updatedVisitor.id = event.currentTarget.dataset.itemid;
        const dialog = document.querySelector("#dialog-remove");
        dialog.showModal();
      }
      if (btntype === "update") {
        const itemId = event.currentTarget.dataset.itemid;
        const candidate = this.$store.getters.VISITOR(itemId);
        this.updatedVisitor = { ...candidate };

        this.openUpdateDialog();
      }
    },
    closeRemoveDialog() {
      const dialog = document.querySelector("#dialog-remove");
      dialog.close();
    },
    submitRemove() {
      this.$store.dispatch("DELETE_VISITORS_FROM_API", this.updatedVisitor.id);
      this.closeRemoveDialog();
    },
    openUpdateDialog() {
      const dialog = document.querySelector("#dialog-update");
      dialog.showModal();
    },
    closeUpdateDialog() {
      const dialog = document.querySelector("#dialog-update");
      dialog.close();
    },
    openCreateDialog() {
      const dialog = document.querySelector("#dialog-create");
      dialog.showModal();
    },
    closeCreateDialog() {
      const dialog = document.querySelector("#dialog-create");
      dialog.close();
    },
    submitCreate(event) {
      const formData = new FormData(event.target);
      const dialog = document.querySelector("#dialog-create");
      dialog.close();

      let visitor = {};
      for (const [key, value] of formData.entries()) {
        visitor[key] = value;
      }

      this.$store.dispatch("ADD_VISITOR_TO_API", visitor);
    },
    resetUpdatedVisitor() {
      this.updatedVisitor = {
        name: null,
        surname: null,
        id: null,
        enteredAt: null,
      };
    },
    submitUpdate(event) {
      const formData = new FormData(event.target);

      const dialog = document.querySelector("#dialog-update");
      dialog.close();

      let visitor = {};
      for (const [key, value] of formData.entries()) {
        visitor[key] = value;
      }
      visitor.id = this.updatedVisitor.id;
      visitor.enteredAt = this.updatedVisitor.enteredAt;

      this.resetUpdatedVisitor();

      this.$store.dispatch("PUT_VISITOR_TO_API", visitor);
    },
  },
};
</script>

<style>
.v-table {
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.v-table td,
.v-table th {
  border: 1px solid #ddd;
}

.v-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
  height: 100px;
  width: max-content;
}

.v-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.v-table tr:hover {
  background-color: #ddd;
}
</style>
