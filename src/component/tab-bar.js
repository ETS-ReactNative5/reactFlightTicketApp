import React from "react";
import { View } from "react-native";
import Box from "./box";

import Button from "./button";
import { Bookmark, Home, Send } from "./icons";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return label == "Search" ? (
          //home button
          <Box p={15} mt={-15} bg="white" borderRadius="full">
            <Button
              key={label}
              size={56}
              bg="red"
              borderRadius="full"
              onPress={onPress}
            >
              <Home color="white" />
            </Button>
          </Box>
        ) : (
          //tab button
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={50}
            flex={1}
            onPress={onPress}
          >
            {label == "History" && (
              <Send color={isFocused ? "skyblue" : "gray"} />
            )}
            {label == "Favorite" && (
              <Bookmark color={isFocused ? "skyblue" : "gray"} />
            )}

            {/* indikatör */}
            <Box
              size={4}
              bg={isFocused ? "red" : "white"}
              mt={6}
              borderRadius="full"
            />
          </Button>
        );
      })}
    </View>
  );
}

export default TabBar;
