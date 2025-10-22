import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <View className="items-center pt-8 pb-6 w-full px-5">
        <Image
          source={require('../../assets/images/header.png')}
          className="w-[450px] h-[520px]"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-white text-4xl font-Jakarta-Bold mb-4 text-center">
          Welcome to PodSum
        </Text>
        <Text className="text-[#9ca3af] text-lg font-Jakarta-Regular mb-10 text-center">
          Get started by signing up or logging in
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/(auth)/signup')}
          className="w-full bg-[#2563eb] rounded-full py-4 mb-4"
        >
          <Text className="text-white text-center font-Jakarta-Bold text-lg">
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/(auth)/login')}
          className="w-full bg-transparent border-2 border-[#2563eb] rounded-full py-4"
        >
          <Text className="text-[#2563eb] text-center font-Jakarta-Bold text-lg">
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
