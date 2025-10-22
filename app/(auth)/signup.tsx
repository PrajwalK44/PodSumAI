import { router } from 'expo-router'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp() {
  const handleSignUp = () => {
    // TODO: Implement signup logic
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
          Create Your Account
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
          className="bg-[#1e1e1e] text-white rounded-lg p-4 mb-6 font-Jakarta-Regular"
        />

        <TouchableOpacity
          onPress={handleSignUp}
          className="w-full bg-[#2563eb] rounded-full py-4 mb-4"
        >
          <Text className="text-white text-center font-Jakarta-Bold text-lg">
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
          <Text className="text-[#9ca3af] text-center font-Jakarta-Regular">
            Already have an account?{' '}
            <Text className="text-[#2563eb] font-Jakarta-Bold">Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
