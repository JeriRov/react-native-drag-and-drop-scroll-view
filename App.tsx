import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./src/Routes";
import Example from "./src/Example";
import { LoadAssets } from "./src/components";

const Stack = createStackNavigator<Routes>();
const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Example"
      component={Example}
      options={{
        title: "Example",
        header: () => null,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets>
      <AppNavigator/>
    </LoadAssets>
  );
};

export default App;
