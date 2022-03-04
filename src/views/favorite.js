import { Text, View } from "react-native";
import * as React from "react";
import Box from "../component/box";
import Button from "../component/button";
import AsyncStorage from "@react-native-async-storage/async-storage";

function FavoriteView() {
  const removeValue = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      //error
    }

    console.log("Done.");
  };

  return (
   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <Box
        bg="skyblue"
        padding={10}
        as={Button}
        borderRadius={8}
        onPress={() => {
          removeValue();
        }}
        mt={10}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={20}>Hafızayı Sıfırla!</Text>
      </Box>
   </View>
  );
}

export default FavoriteView;