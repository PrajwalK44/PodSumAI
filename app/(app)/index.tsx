import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-2xl font-Jakarta-Bold">
          Home Screen
        </Text>
        <Text className="text-[#9ca3af] mt-2 font-Jakarta-Regular">
          Main app content goes here
        </Text>
      </View>
    </SafeAreaView>
  )
}
