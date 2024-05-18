/**
 * @format
 */

import { AppRegistry, Platform } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import messaging from "@react-native-firebase/messaging";

// Handle background messages using setBackgroundMessageHandler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  // eslint-disable-next-line no-console
  console.log("Message handled in the background!", remoteMessage);
});

// Check if app was launched in the background and conditionally render null if so
const HeadlessCheck = ({ isHeadless }) => {
  // eslint-disable-next-line no-console
  console.log("isHeadless");
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  // Render the app component on foreground launch
  return <App />;
};

AppRegistry.registerComponent(appName, () => (Platform.OS === "android" ? App : HeadlessCheck));
