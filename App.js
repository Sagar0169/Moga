import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import { StatusBar } from "expo-status-bar";
import FinalOnboardingScreen from "./screens/FinalOnboardingScreen";
import SuccessScreen from "./screens/SuccessScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SignUpOptionsScreen from "./screens/SignUpOptionsScreen";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import CreatePasswordScreen from "./screens/CreatePasswordScreen";
import DashboardScreen from "./screens/DashboradScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the delay here (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar style="inverted" />
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      >
        {isLoading ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={SplashScreen}
          />
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Onboarding"
              component={OnboardingScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "slide_from_bottom",
              }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "slide_from_bottom",
              }}
              name="FinalOnBoard"
              component={FinalOnboardingScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "slide_from_bottom",
              }}
              name="SuccessScreen"
              component={SuccessScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "fade_from_bottom",
              }}
              name="SignUpScreen"
              component={SignUpScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "fade_from_bottom",
              }}
              name="SignUpOptions"
              component={SignUpOptionsScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "fade_from_bottom",
              }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "fade_from_bottom",
              }}
              name="ForgotPassword"
              component={ForgotPassword}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "fade_from_bottom",
              }}
              name="CreatePassword"
              component={CreatePasswordScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "modal",
                animation: "fade_from_bottom",
              }}
              name="DashboardScreen"
              component={DashboardScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
