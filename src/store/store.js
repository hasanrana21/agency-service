import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      foods: [
        {
          name: "mango",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          name: "Orange",
          description: "lorem ipsum dolor sit amet, consect",
        },
        {
          name: "Apple",
          description: "lorem ipsum dolor sit amet, consect",
        },
        {
          name: "Banana",
          description: "lorem ipsum dolor sit",
        },
      ],
    };
  },
});

export default store;
