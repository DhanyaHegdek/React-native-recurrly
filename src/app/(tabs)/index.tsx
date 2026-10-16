
import { View, Text } from 'react-native';
import { Link, type Href } from 'expo-router';
import '../../global.css';
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Renders the Home tab with safe-area spacing and links to onboarding,
 * authentication, and subscription screens.
 *
 * @returns The Home screen element.
 */
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">

      <Text className="text-5xl font-sans-extrabold" >Home</Text>


      <Link href="/onboarding" className="mt-4" font-sans-bold>
        <View className="rounded bg-primary px-5 py-3">
          <Text className="font-bold text-white">
            Go to Onboarding
          </Text>
        </View>
      </Link>

      <Link href="/(auth)/sign-in" className="mt-4" font-sans-bold>
        <View className="rounded bg-primary px-5 py-3">
          <Text className="font-bold text-white">
            Go to Sign In
          </Text>
        </View>
      </Link>

      <Link href="/(auth)/sign-up" className="mt-4" font-sans-bold>
        <View className="rounded bg-primary px-5 py-3">
          <Text className="font-bold text-white">
            Go to Sign Up
          </Text>
        </View>
      </Link>


    </SafeAreaView >
  );
}
