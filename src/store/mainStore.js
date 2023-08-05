import { create } from "zustand";

import { globalStore } from "./stores";

export const useAppBoundStore = create()((...properties) => ({
  ...globalStore(...properties),
}));
