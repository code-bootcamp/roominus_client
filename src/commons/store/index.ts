import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    id: "",
    name: "",
    email: "",
    phone: "",
    point: 0,
  },
});

export const userPickThemeState = atom({
  key: "userPickThemeState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
export const GoogleInfoState = atom({
  key: "GoogleInfoState",
  default: {
    email: "",
  },
});
export const KakaoInfoState = atom({
  key: "KakaoInfoState",
  default: {
    email: "",
  },
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
export const updateUserNameState = atom({
  key: "updateUserNameState",
  default: "",
});
