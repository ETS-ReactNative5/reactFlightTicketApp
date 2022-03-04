import React from "react";
import { Keyboard } from "react-native";
import { Close, Search } from "./icons";
import Text from "./text";
import Input from "./input";
import Box from "./box";
import Button from "./button";
import { useState } from "react";

//Search Alanı Component.
const SearchBox = ({setRouteName, routeName}) => {
  //Focus için State.
  const [isFocus, setFocus] = useState(false);

  //Input alanını silmek için State.
  const [value, setValue] = useState(" ");

  // Klavye kapanır ve focus kaybolur.
  const onCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  //Input alanını temizler.
  const onClear = () => {
    setValue(" ");
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          bg="white"
          height={52}
          color="black"
          borderWith={1}
          borderColor={isFocus ? "#D1D1D1" : "transparent"}
          placeholder="Uçuşlar..."
          placeholderTextColor="#48515B"
          pl={52}
          borderRadius="normal"
          value={routeName}
          onFocus={() => setFocus(true)} //ekranı kaplar
          onChangeText={(text) => setRouteName(text)} 
        />

        {routeName.length > 0 && (
          <Button onPress={onClear} position="absolute" right={16} top={14}>
            <Close color="skyblue" />
          </Button>
        )}
        
        <Button position="absolute" left={16} top={14}>
          <Search color="skyblue" />
        </Button>
      </Box>

      {isFocus && (
        <Button onPress={onCancel} px={20} height={52}>
          <Text> Vazgeç </Text>
        </Button>
      )}
    </Box>
  );
}

export default SearchBox;
