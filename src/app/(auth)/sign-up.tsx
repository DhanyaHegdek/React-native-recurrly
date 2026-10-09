
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function SignUp() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-primary">
                Sign Up
            </Text>

            <Link href="/(auth)/sign-in" className="mt-4">
                <Text className="text-lg font-bold text-blue-700">
                    Go to Sign In
                </Text>
            </Link>
        </View>
    );
}
