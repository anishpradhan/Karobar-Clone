import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(signin)'
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();

  return <Stack initialRouteName='(signin)' screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}/>
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: true }} /> */}
        {/* <Stack.Screen name="(signin)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="languageSelection" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false,  gestureEnabled:false }} />
        <Stack.Screen name="otpVerification" options={{ headerShown: false,  gestureEnabled:false }} />
        <Stack.Screen name="selectMode" options={{ headerShown: false,  gestureEnabled:false }} /> */}
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
    //  </Stack>
    // </ThemeProvider>
  
}
