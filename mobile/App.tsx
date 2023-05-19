import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-zinc-950">
      <Text className="text-4xl font-bold text-zinc-50">Rocketseat</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
