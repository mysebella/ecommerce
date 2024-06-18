import { useState } from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import Seperator from "../separator";

const Item = [
  { id: 1, label: "Makanan" },
  { id: 2, label: "Minuman" },
  { id: 3, label: "Snack" },
  { id: 4, label: "Kopi" },
  { id: 5, label: "Baju" },
  { id: 6, label: "Celana" },
  { id: 7, label: "Payung" },
];

export default function Category() {
  const [selectedBadge, setSelectedBadge] = useState<number | null>(1);

  const handleBadge = (id: number) => setSelectedBadge(id);

  return (
    <View>
      <Seperator label="Category Product" path="home" />
      <ScrollView
        horizontal
        contentContainerStyle={{ gap: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {Item.map((badge) => {
          return (
            <TouchableWithoutFeedback
              key={badge.id}
              onPress={() => handleBadge(badge.id)}
            >
              <View
                className={`rounded-full border px-4 py-2 ${
                  badge.id === selectedBadge
                    ? "border-primary"
                    : "border-gray-300"
                }`}
              >
                <Text
                  className={`text-black/70 text-base font-outfit-medium  ${
                    badge.id === selectedBadge
                      ? "text-[#059212]"
                      : "text-black/50"
                  }`}
                >
                  {badge.label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
