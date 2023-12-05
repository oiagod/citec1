import React, { useState, useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { AppRegistry } from 'react-native';
import { app } from './src/Services/firebaseConfig.js';
import Toast from "react-native-toast-message";

import { ProfilePhotoProvider } from './src/components/atoms/context/profilePhoto.jsx';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from './src/components/pages/loginScreen/index.jsx';
import CreateAccount from './src/components/pages/createAccount/index.js';
import { HomeScreen } from './src/components/pages/homeScreen/index.jsx';
import ForgotPassword from './src/components/pages/forgotPassowrd/index.jsx';
import UserProfile from './src/components/pages/userProfile/index.jsx';
import PerfilConfigPage from './src/components/pages/perfilConfigPage/index.jsx';
import LoadingScreen from './src/components/pages/loadingScreen/index.jsx';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous task (e.g., fetching data)
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once on mount

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
    <ProfilePhotoProvider>
      <NavigationContainer>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="PerfilConfigPage" component={PerfilConfigPage} />
          </Stack.Navigator>
        )}
        <Toast />
      </NavigationContainer>
    </ProfilePhotoProvider>
  );
}