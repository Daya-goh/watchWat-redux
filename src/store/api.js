import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const showsApi = createApi({
  reducerPath: "shows",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.watchmode.com/v1",
  }),
  endpoints(builder) {
    return {
      fetchShows: builder.query({
        query: (input) => {
          return {
            url: "/autocomplete-search",
            method: "GET",
            params: {
              search_field: "name",
              search_value: input,
              type: 2,
              apiKey: "Xi2NW1MlhJARxSqBIbyUJD68ZjljDinK2iKSzG6F",
            },
          };
        },
      }),
    };
  },
});

export const { useFetchShowsQuery } = showsApi;
export { showsApi };
