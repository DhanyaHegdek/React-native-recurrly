import { View, Text } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function SubscriptionDetail() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <View className="flex-1 items-center justify-center bg-white p-6">
            <Text className="text-xl font-bold text-primary">
                Subscription Detail
            </Text>

            <Text className="mt-3 text-gray-700">
                Subscription ID: {id}
            </Text>

            <Link href="/subscription" className="mt-4">
                <Text className="text-lg font-bold text-blue-700">
                    Go to Subscription
                </Text>
            </Link>

            <Link href="/subscription" className="mt-4">
                <Text className="text-lg font-bold text-blue-700">
                    Back to Subscriptions
                </Text>
            </Link>

            <Link href="/" className="mt-4">
                <Text className="text-lg font-bold text-blue-700">
                    Go Home
                </Text>
            </Link>
        </View>
    );
}
