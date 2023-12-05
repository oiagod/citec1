import React, { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from './src/components/pages/loginScreen/index.jsx';
import CreateAccount from './src/components/pages/createAccount/index.js';
import { HomeScreen } from './telas/homeScreen';
import ForgotPassword from './src/components/pages/forgotPassowrd/index.jsx';
import UserProfile from './src/components/pages/userProfile/index.jsx';
import PerfilConfigPage from './src/components/pages/perfilConfigPage/index.jsx'

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
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        <Stack.Screen name="PerfilConfigPage" component={PerfilConfigPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}