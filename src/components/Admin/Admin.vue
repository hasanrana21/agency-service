<template>
  <section class="h-screen">
    <div class="grid grid-cols-12 gap-4">
      <div class="border-4 border-red-400 bg-blue-400 col-span-3">
        <div class="p-6">
          <ul>
            <li @click="handleDashboard">Dashboard</li>
            <li @click="handleUserPermission">User & Permissions</li>
            <li @click="handleAddFood">Add Food</li>
            <li>Manage Food</li>
          </ul>
        </div>
      </div>
      <div class="border-4 border-blue-400 col-span-9 ml-4 bg-gray-300">
        <Dashboard v-if="dashboard" />
        <UserPermission v-if="userPermission" />
        <AddFood v-if="addFood" />
      </div>
    </div>
  </section>
</template>

<script>
import Dashboard from "./Content/Dashboard.vue";
import UserPermission from "./Content/UserPermission.vue";
import AddFood from "./Content/AddFood.vue";
export default {
  name: "Admin",
  data() {
    return {
      dashboard: true,
      userPermission: false,
      addFood: false,
    };
  },
  methods: {
    handleDashboard() {
      this.dashboard = true;
      this.userPermission = false;
      this.addFood = false;
    },
    handleUserPermission() {
      this.userPermission = true;
      this.dashboard = false;
      this.addFood = false;
    },
    handleAddFood() {
      this.addFood = true;
      this.userPermission = false;
      this.dashboard = false;
    },
  },
  components: { Dashboard, UserPermission, AddFood },
};
</script>

<style scoped>
ul li {
  @apply text-xl text-white p-2 my-4 cursor-pointer;
}
</style>
