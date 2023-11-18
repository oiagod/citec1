import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from './src/components/pages/loginScreen/index.jsx';
// import { LoginScreen } from './telas/loginScreen'; login screen antiga
// import { CreateAccount } from './telas/createAccount'; create account antiga
import CreateAccount from './src/components/pages/createAccount/index.js';
import { HomeScreen } from './telas/homeScreen';
import { ForgotPassword } from './telas/forgotPassword';
// import { UserProfile } from './telas/userProfile';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="UserProfile" component={UserProfile}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}