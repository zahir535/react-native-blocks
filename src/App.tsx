import React, { useEffect } from "react";
import { Keyboard, PermissionsAndroid, Platform, SafeAreaView, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { flexChild } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigation";
import messaging from "@react-native-firebase/messaging";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onKeyboardWillChangeFrame = () => {};

  useEffect(() => {
    const requestUserPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        // eslint-disable-next-line no-console
        console.log("Authorization status:", authStatus);
      }
    };

    const getToken = async () => {
      const register = await messaging().registerDeviceForRemoteMessages();
      // eslint-disable-next-line no-console
      console.log("register", register);
      const token = await messaging().getToken();
      // eslint-disable-next-line no-console
      console.log("FCM TOKEN:", token);
    };
    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    } else {
      requestUserPermission();
    }

    getToken();

    const keyboardWillChangeFrame = Keyboard.addListener("keyboardWillChangeFrame", onKeyboardWillChangeFrame);
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // eslint-disable-next-line no-console
      console.log("New Foreground FCM", JSON.stringify(remoteMessage));
    });

    return () => {
      keyboardWillChangeFrame.remove();
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={flexChild}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={backgroundStyle.backgroundColor} />
        <RootNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
