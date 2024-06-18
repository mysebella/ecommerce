import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLOR from "@/constants/color";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          elevation: 0,
          height: 65,
          backgroundColor: "#f9fafb",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) =>
            Tab({ focused, icon: "storefront-outline" }),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => Tab({ focused, icon: "store-search" }),
        }}
      />
      <Tabs.Screen
        name="troli"
        options={{
          tabBarIcon: ({ focused }) =>
            Tab({ focused, icon: "cart-variant", countPop: true }),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) =>
            Tab({ focused, icon: "face-man-profile" }),
        }}
      />
    </Tabs>
  );
}

type icon =
  | "storefront-outline"
  | "cart-variant"
  | "face-man-profile"
  | "store-search";

type barProp = { focused: boolean; icon: icon; countPop?: boolean };

function Tab({ focused, icon, countPop }: barProp) {
  return (
    <View className={`flex-1 w-full justify-center items-center`}>
      {countPop ? (
        <View className="absolute top-2 right-7 z-50 rounded-full bg-danger border border-[#f9fafb] justify-center w-5 h-5 items-center">
          <Text className=" font-outfit-regular text-xs text-white">6</Text>
        </View>
      ) : (
        ""
      )}
      <MaterialCommunityIcons
        name={icon}
        size={28}
        color={focused ? COLOR.primary : COLOR.gray}
      />
    </View>
  );
}
