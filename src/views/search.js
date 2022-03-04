import * as React from "react";

import ButtonClick from "../component/buttonClick";
import Box from "../component/box";
import { useState } from "react";
import Input from "../component/input";
import Button from "../component/button";
import Text from "../component/text";
import { Close, Search } from "../component/icons";
import { Keyboard, Platform, SafeAreaView, Image } from "react-native";
import DatePicker from "react-native-datepicker";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

function SearchView({ navigation }) {
  const [routeName, setRouteName] = useState("");
  const [dateName, setDateName] = useState("");
  
  const Screenwidth = Dimensions.get('window').width;
  const Screnheight = Dimensions.get('window').height;

  //Focus için State.
  const [isFocus, setFocus] = useState(false);

  //Focus Android için.
  const [isFocusAndroid, setFocusAndroid] = useState(false);

  // Klavye kapanır ve focus kaybolur.
  const onCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  // Android klavye kapanır ve focus kaybolur.
  const onCancelAndroid = () => {
    setFocusAndroid(false);
    Keyboard.dismiss();
  };

  //Input alanını temizler.
  const onClear = () => {
    setRouteName("");
  };

  return (
    <Box>
      <Box>
      <Image
            style={{  width: wp('120%'), height: hp('30%')}}
            source={require("../../assets/scren.jpeg")}
          />
      </Box>

      <Box p={10}>
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
              placeholder="Choose Airport VLC"
              placeholderTextColor="#48515B"
              pl={52}
              fontSize={17}
              fontWeight={500}
              borderRadius="normal"
              value={routeName}
              onFocus={() => setFocus(true)}                      
              onChangeText={(text) => {
                setRouteName(text);
              }}
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
      </Box>


      {/* Android ınput alanı*/}
      {Platform.OS == "android" ? ( <Box p={10}>
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
              placeholder="2022-09-23 enter in the format..."
              placeholderTextColor="#48515B"
              pl={52}
              fontSize={17}
              fontWeight={500}
              borderRadius="normal"
              value={dateName}
              onFocus={() => setFocusAndroid(true)} 
              onChangeText={(text) => {
                setDateName(text);
              }}
            />

            {dateName.length > 0 && (
              <Button onPress={onClear} position="absolute" right={16} top={14}>
                <Close color="skyblue" />
              </Button>
            )}

            <Button position="absolute" left={16} top={14}>
              <Search color="skyblue" />
            </Button>
          </Box>

          {isFocusAndroid && (
            <Button onPress={onCancelAndroid} px={20} height={52}>
              <Text> Vazgeç </Text>
            </Button>
          )}
        </Box>
      </Box>) : (
        <Box ml={10} mt={20}>
        <SafeAreaView
          flex={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          backgroundColor="skyblue"
        >
          <Box
            flex={1}
            justifyContent="flex-start"
            alignItems="flex-start"
            backgroundColor="skyblue"
          >
            <DatePicker
              style={{ left: 5, width: 360}}
              date={dateName}
              mode="date"
              placeholder="Select Date"
              format="YYYY-MM-DD"
              minDate="2021-01-01"
              maxDate="2025-01-01"
              confirmBtnText="Save"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -5,
                  top: 4,
                },
                dateInput: {
                  height:52,
                  backgroundColor: "white",
                  borderColor: "white",
                  alignItems: "flex-start",
                  padding:5,
                  borderRadius: 8,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowRadius: 24,
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                },
                placeholderText: {
                  fontSize: 17,
                  color: "#48515B",
                  fontWeight:"500"
                },
              }}
              onDateChange={(date) => {
                setDateName(date);
              }}
            />
          </Box>
        </SafeAreaView>
      </Box>
      ) }

     <Box mt={Platform.os === 'ios' ? Screenwidth/5 : Screenwidth/2} >
          <ButtonClick
            title="Search Flight"
            onPress={() =>
              navigation.navigate("Detail", {
                routeNameProp: routeName,         //Varış Noktası. (VLC) 
                dateNameProp: dateName,           //Uçuş Tarihi. (2022-02-28)
              })
            }
          />
        </Box>
     
    </Box>
  );
}

export default SearchView;