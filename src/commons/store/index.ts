import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({ key: "accessTokenState", default: "" });

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    _id: "",
    email: "",
    name: "",
  },
});

export const userReservationInfo = atom({
  key: "userReservationInfo",
  default: {
    date: "",
    cafe: "",
    theme: "",
    time: "",
  },
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
