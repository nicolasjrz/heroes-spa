import { types } from "../src/auth/types/types";

describe("prueba en los types", () => {
  test("debe de regresar estos types", () => {
    expect(types).toEqual({ login: " [Auth] Login", logout: " [Auth] Logout" });
  });
});
