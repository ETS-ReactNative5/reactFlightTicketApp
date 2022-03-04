import * as React from "react";
import { Text, View } from "react-native";

import ButtonClick from "../component/buttonClick";
import Box from "../component/box";

function SeatSelectionView({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Box mt={480}>
        <ButtonClick
          title="Koltuk Seçimi Onay"
          onPress={() => navigation.navigate("SeatSelection")}
        />
      </Box>
    </View>
  );
}

export default SeatSelectionView;
