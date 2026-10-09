
import { View, Text } from 'react-native';
import { Link, type Href } from 'expo-router';
import '../../global.css';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-success-500">
        Hello! My app is working 🎉
      </Text>

      <Link href="/onboarding" className="mt-4">
        <View className="rounded bg-primary px-5 py-3">
          <Text className="font-bold text-white">
            Go to Onboarding
          </Text>
        </View>
      </Link>

      <Link href="/(auth)/sign-in" className="mt-2">
        <View className="rounded bg-primary px-5 py-3">
          <Text className="font-bold text-white">
            Go to Sign In
          </Text>
        </View>
      </Link>

      <Link href="/(auth)/sign-up" className="mt-2">
        <View className="rounded bg-primary px-5 py-3">
          <Text className="font-bold text-white">
            Go to Sign Up
          </Text>
        </View>
      </Link>

      <Link href={'/subscriptions/subscription' as Href} className="mt-4">
        <Text className="text-blue-700">
          Spotify subscriptions
        </Text>
      </Link>

      <Link
        href={{
          pathname: '/sunscriptions/[id]',
          params: { id: '123' },
        }}
        className="mt-2"
      >
        <Text className="text-blue-700">
          Subscription details
        </Text>
      </Link>
    </View>
  );
}
