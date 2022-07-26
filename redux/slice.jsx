import { createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const mySlice = createSlice({
  name: "myValue",
  initialState: {
    filter: "",
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = mySlice.actions;

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://62d82adc9c8b5185c7846b84.mockapi.io",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({ url: "/contacts", method: "GET" }),
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (value) => ({
        url: "/contacts",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Contacts"],
    }),
    delContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDelContactMutation,
} = contactsApi;

export const createUserApi = createApi({
  reducerPath: "users",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (value) => ({
        url: "/users/signup",
        method: "POST",
        data: value,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const { useAddUserMutation } = createUserApi;
