import { StyleSheet, Text, View } from "react-native";

import { useColorScheme } from "react-native";

import { Stack, DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { AnimatedSplashOverlay } from "@/components/animated-icon";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
