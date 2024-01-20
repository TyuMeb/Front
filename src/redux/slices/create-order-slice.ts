import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderDetail } from "../api/order-api-slice";
import { File } from "../api/generated";

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
  reducers: {
    initializeOrder: (state, action: PayloadAction<OrderDetail | null>) => {
      state.order = action.payload;
    },

    addAnswerFile: (state, { payload }: PayloadAction<{ answer_id: number; file: File }>) => {
      if (!state.order) return;

      const index = state.order.answers.findIndex((answer) => answer.id === payload.answer_id);

      if (index === -1) {
        state.order.answers.push({
          question_id: payload.answer_id,
          response: "",
          files: [payload.file],
        });
        return;
      }

      state.order.answers = state.order.answers.map((answer) => {
        if (answer.id === payload.answer_id) {
          answer.files = [...(answer?.files || []), payload.file];
        }
        return answer;
      });
    },
    deleteAnswerFile: (state, { payload }: PayloadAction<{ answer_id: number; file_id: number }>) => {
      if (!state.order) return;

      state.order.answers = state.order.answers.map((answer) => {
        if (answer.id === payload.answer_id) {
          answer.files = (answer?.files || []).filter((file) => file.id !== payload.file_id);
        }
        return answer;
      });
    },
  },
});
