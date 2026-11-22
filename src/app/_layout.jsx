import { Stack } from "expo-router";
import { useFonts } from "@expo-google-fonts/poppins";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Perintah untuk mencegah SplashScreen tersembunyi secara otomatis
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // Memuat custom font
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  // Font Loader: untuk memuat custom font sebelum aplikasi menampilkan antarmuka
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffff",
        },
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="news/[id]"
        options={{ headerShown: true, headerTitle: "Detail News" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;