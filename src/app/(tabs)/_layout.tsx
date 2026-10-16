
import { Tabs } from "expo-router";
import { View } from "react-native";
import {
    House,
    ChartNoAxesCombined,
    Settings,
    CreditCard,
} from "lucide-react-native";

const tabIcons = {
    index: House,
    insights: ChartNoAxesCombined,
    settings: Settings,
    subscription: CreditCard,
};

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#DB2777",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarStyle: {
                    position: "absolute",
                    bottom: 14,
                    left: 16,
                    right: 16,
                    height: 76,
                    backgroundColor: "#FFFFFF",
                    borderTopWidth: 0,
                    borderRadius: 26,
                    paddingTop: 8,
                    paddingBottom: 7,
                    elevation: 10,
                    shadowColor: "#502a39",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "600",
                    marginTop: 2,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => {
                        const Icon = tabIcons.index;
                        return <Icon color={color} size={size} />;
                    },
                }}
            />

            <Tabs.Screen
                name="insights"
                options={{
                    title: "Insights",
                    tabBarIcon: ({ color, size }) => {
                        const Icon = tabIcons.insights;
                        return <Icon color={color} size={size} />;
                    },
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => {
                        const Icon = tabIcons.settings;
                        return <Icon color={color} size={size} />;
                    },
                }}
            />

            <Tabs.Screen
                name="subscription"
                options={{
                    title: "Subscription",
                    tabBarIcon: ({ color, size }) => {
                        const Icon = tabIcons.subscription;
                        return <Icon color={color} size={size} />;
                    },
                }}
            />
        </Tabs>
    );
};

export default Layout;
