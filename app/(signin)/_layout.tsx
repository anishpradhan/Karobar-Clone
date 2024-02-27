import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Stack } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Stack initialRouteName="languageSelection">
      <Stack.Screen name="languageSelection" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="otpVerification"
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="selectMode"
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack>
    // <Tabs
    // initialRouteName='languageSelection'
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     // Disable the static render of the header on web
    //     // to prevent a hydration error in React Navigation v6.
    //     headerShown: false,
    //   }}>
    //   <Tabs.Screen
    //     name="languageSelection"
    //     options={{
    //       title: 'Language Selection',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="login"
    //     options={{
    //       title: 'Login',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="otpVerification"
    //     options={{
    //       title: 'OTP Verification',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="selectMode"
    //     options={{
    //       title: 'Select Mode',
    //       tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
    //     }}
    //   />
    // </Tabs>
  );
}
