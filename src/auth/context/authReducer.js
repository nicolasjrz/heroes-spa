import { act } from "@testing-library/react";
import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, loggued: true, user: action.payload };

    case types.logout:
      return { loggued: false };
    default:
      return state;
  }
};
