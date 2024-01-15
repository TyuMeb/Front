import { createSlice } from "@reduxjs/toolkit";
import { orderApi, OrderDetail } from "../api/order-api-slice";

type UserState = {
    order: OrderDetail | null;
    loading: boolean;
};

const initialState: UserState = {
    order: null,
    loading: true,
};

export const createOrderSlice = createSlice({
    initialState,
    name: "create-order",
    reducers: (create) => ({
        fetchTodo: create.asyncThunk(
            async (id: number) => {
                const response = await orderApi.endpoints.orderAnswers.useQuery(id);

                return response.data!;
            },
            {
                pending: (state) => {
                    state.loading = true;
                },
                rejected: (state) => {
                    state.loading = false;
                },
                fulfilled: (state, action) => {
                    state.loading = false;
                    state.order = action.payload;
                },
            }
        ),
    }),
});
