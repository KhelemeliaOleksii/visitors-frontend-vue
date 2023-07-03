import { createStore } from "vuex";
import axios from "axios";
import { formatCurrentTime } from "@/utils/formatCurrentTime";
import "@/services/api/configAxios";
import { endpointsVisitors } from "@/services/api/endpointsVisitors";
// Create a new store instance.
const store = createStore({
  state: {
    visitors: [],
  },
  actions: {
    async GET_VISITORS_FROM_API({ commit }) {
      try {
        const response = await axios(endpointsVisitors.visitors, {
          method: "GET",
        });
        commit("SET_VISITORS_TO_VUEX", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async ADD_VISITOR_TO_API({ commit }, visitor) {
      try {
        const response = await axios.post(endpointsVisitors.visitors, {
          ...visitor,
          enteredAt: formatCurrentTime(),
        });
        commit("ADD_VISITOR_TO_VUEX", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async DELETE_VISITORS_FROM_API({ commit }, visitorId) {
      try {
        await axios.delete(`${endpointsVisitors.visitors}/${visitorId}`);
        commit("REMOVE_VISITORS_FROM_VUEX", visitorId);
      } catch (error) {
        console.log(error);
      }
    },
    async PUT_VISITOR_TO_API({ commit }, visitor) {
      try {
        const response = await axios.put(
          `${endpointsVisitors.visitors}/${visitor.id}`,
          {
            name: visitor.name,
            surname: visitor.surname,
            enteredAt: visitor.enteredAt,
          }
        );
        commit("UPDATE_VISITOR_IN_VUEX", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_VISITORS_TO_VUEX: (state, visitors) => {
      state.visitors = visitors;
    },
    ADD_VISITOR_TO_VUEX: (state, visitor) => {
      state.visitors.push(visitor);
    },
    REMOVE_VISITORS_FROM_VUEX: (state, visitorId) => {
      const index = state.visitors.findIndex(
        (item) => item.id.toString() === visitorId
      );
      state.visitors.splice(index, 1);
    },
    UPDATE_VISITOR_IN_VUEX: (state, visitor) => {
      const index = state.visitors.findIndex(
        (item) => item.id.toString() === visitor.id.toString()
      );
      state.visitors[index] = { ...visitor };
    },
  },
  getters: {
    VISITORS(state) {
      return state.visitors;
    },
    VISITOR: (state) => (id) => {
      const index = state.visitors.findIndex(
        (item) => item.id.toString() === id
      );
      return state.visitors[index];
    },
  },
});

export default store;
