import { selector } from "recoil";
import { fetchItemDetail } from "../data";

export const itemDetailsState = selector({
  key: "itemDetailsState",
  get: async ({ get }) => {
    const details = await fetchItemDetail();
    return details;
  },
});
