import { useEffect, useState } from "react";
import { addEventListener, NetInfoState } from "@react-native-community/netinfo";

/**
 * hook to listen to network changes from its listener
 * @returns { netInfoState: netInfoState, setNetInfoState: setNetInfoState }
 * alternative, a ready made hook of useNetInfo()
 *
 * eg:
 * const { type, isConnected } = useNetInfo();
 * import { useNetInfo } from "@react-native-community/netinfo";
 */
export const useNetInfoHook = () => {
  const [netInfoState, setNetInfoState] = useState<NetInfoState | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = addEventListener((state) => {
      setNetInfoState(state);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { netInfoState: netInfoState, setNetInfoState: setNetInfoState };
};
