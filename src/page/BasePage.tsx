import { View, Text } from "react-native";
import React from "react";
import { centerHV, flexChild } from "../styles";

export const BasePage = () => {
  return (
    <View style={{ ...flexChild, ...centerHV }}>
      <Text>BasePage</Text>
    </View>
  );
};
