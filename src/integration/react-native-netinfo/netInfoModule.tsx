import { fetch, NetInfoState } from "@react-native-community/netinfo";

/**
 * funtion to get netInfoState
 * @returns state: NetInfoState
 */
export const fetchState = async () => {
  const state: NetInfoState = await fetch();
  return state;
};
