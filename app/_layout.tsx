import { useFonts } from 'expo-font'
import { Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import '../global.css'

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
})

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    'Jakarta-Bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'Jakarta-ExtraBold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'Jakarta-ExtraLight': require('../assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
    'Jakarta-Light': require('../assets/fonts/PlusJakartaSans-Light.ttf'),
    'Jakarta-Medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Jakarta-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'Jakarta-SemiBold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  })

  const router = useRouter()

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide()
      // Start the onboarding flow
      // router.replace('/(auth)/signup')
      router.replace('/(app)')
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#ffffff',
      }}
    />
  )
}
