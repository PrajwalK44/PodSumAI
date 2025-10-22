import { router } from 'expo-router'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login() {
  const handleLogin = () => {
    // TODO: Implement login logic
    // For now, navigate to main app
    router.replace('/(app)')
  }

  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <View className="items-center pt-8 pb-6 w-full px-5">
        <Image
          source={require('../../assets/images/header.png')}
          className="w-full h-40"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 p-5">
        <Text className="text-white text-3xl font-Jakarta-Bold mb-8">
          Log In
        </Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#9ca3af"
          className="bg-[#1e1e1e] text-white rounded-lg p-4 mb-4 font-Jakarta-Regular"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#9ca3af"
          secureTextEntry
          className="bg-[#1e1e1e] text-white rounded-lg p-4 mb-2 font-Jakarta-Regular"
        />

        <TouchableOpacity
          // onPress={() => router.push('/(auth)/forgot')}
          className="mb-6"
        >
          <Text className="text-[#2563eb] text-right font-Jakarta-Regular">
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          className="w-full bg-[#2563eb] rounded-full py-4 mb-4"
        >
          <Text className="text-white text-center font-Jakarta-Bold text-lg">
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
          <Text className="text-[#9ca3af] text-center font-Jakarta-Regular">
            Don't have an account?{' '}
            <Text className="text-[#2563eb] font-Jakarta-Bold">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
