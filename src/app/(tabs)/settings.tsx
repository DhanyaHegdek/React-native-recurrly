import { View, Text } from 'react-native'
import React from 'react'
import { Link, type Href } from 'expo-router';
import '../../global.css';
import { SafeAreaView } from "react-native-safe-area-context";

const settings = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>settings</Text>
        </SafeAreaView>
    )
}

export default settings