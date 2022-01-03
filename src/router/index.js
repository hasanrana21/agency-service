import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage/Home.vue";
import Checkout from "../components/PlaceOrder/Checkout.vue";
import AddToCart from "../components/PlaceOrder/AddToCart.vue";
import OrderCompleted from "../components/PlaceOrder/OrderCompleted.vue";
import Login from "../components/LoginPage/Login.vue";
import ContactUs from "../components/ContactUs.vue";
import UpdateForm from "../components/UpdateForm.vue";
import CrudBackend from "../components/about-us-page/CrudBackend.vue";
import ShowFood from "../components/about-us-page/ShowFood.vue";
import Admin from "../components/Admin/Admin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkout/:id",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/addToCart",
    name: "AddToCart",
    component: AddToCart,
  },
  {
    path: "/orderCompleted",
    name: "OrderCompleted",
    component: OrderCompleted,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/contactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/update-form",
    name: "UpdateForm",
    component: UpdateForm,
  },
  {
    path: "/crud-backend",
    name: "CrudBackend",
    component: CrudBackend,
  },
  {
    path: "/show-food",
    name: "ShowFood",
    component: ShowFood,
  },

  // Private Route for Admin
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
