import { Alert, FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Box from "../component/box";
import Text from "../component/text";
import Button from "../component/button";
import SeatComponent from "../component/seatComponent";
import Toast from "react-native-toast-message";

import moment from "moment";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const apointment = ({ route }) => {
  const {
    flightDestination,
    flightScheduleDate,
    flightScheduleTime,
    flightName,
    actualLandingTime,
  } = route.params;

  const DATA = Array.from({ length: 20 }, (v, i) => i);

  const [isFutureToday, setIsFutureToday] = useState(false);
  const [rezSave, setrezSave] = useState([]);

  // Gelecek tarih rezervasiyonu.
  const todaysDate = moment().format("YYYY-MM-DD");
  const todaysTime = moment().format("hh:mm:ss");

  const flightsDate = moment(`${flightScheduleDate}`).format("YYYY-MM-DD");

  // Dataya Uçuş Eklendi.
  const storeData = async (value) => {
    let newDatas = [value, ...rezSave];
    await AsyncStorage.setItem("@storage_Key", JSON.stringify(newDatas))
      .then(() => {
        setrezSave(newDatas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Datadan Uçuş Bilgisi Getir.
  const getData = async () => {
    await AsyncStorage.getItem("@storage_Key")
      .then((data) => {
        if (data !== null) {
          setrezSave(JSON.parse(data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isFuture = () => {
    const booleanDateSame = moment(flightsDate).isSame(todaysDate); // gün
    const booleanDateAfter = moment(flightsDate).isAfter(todaysDate); // gün
    const booleanTime = flightScheduleTime > todaysTime; // saat

    const isSameOrAfter = booleanDateSame || booleanDateAfter;
    if (isSameOrAfter) {
      if (booleanDateAfter) {
        showToast(booleanDateAfter);
        setIsFutureToday(booleanDateAfter);
      } else {
        if (booleanTime) {
          showToast(booleanTime);
          setIsFutureToday(booleanTime);
        } else {
          showToast(booleanTime);
          setIsFutureToday(booleanTime);
        }
      }
    } else {
      showToast(isSameOrAfter);
      setIsFutureToday(isSameOrAfter);
    }
  };
 
  useEffect(() => {
    getData();
    isFuture();
  }, []);

  const ItemRender = ({ item }) => (
    <SeatComponent
      item={item}
      flightDestination={flightDestination}
      flightScheduleDate={flightScheduleDate}
      flightScheduleTime={flightScheduleTime}
      flightName={flightName}
      storeData={storeData}
      isFutureToday={isFutureToday}
      actualLandingTime={actualLandingTime}
    />
  );

  const showToast = (bool) => {
    Toast.show({
      type: bool ? "success" : "error",
      text1: bool ? "Please" : "It's a past date! 😔",
      text2: bool ? "Select Seat. 👋" : "You cannot choose a seat.",
    });
  };
  return (
    <Box>
      <Box zIndex={1}>
        <Toast />
      </Box>
      <Box justifyContent="center" alignItems="center">

        <Box
          as={Button}
          mt={30}
          bg="skyblue"
          style={{ height: hp("15%"), width: wp("90%") }}
          borderRadius={12}
          flexDirection="column"
          justifyContent="space-around"
        >
        <Box
          mt={10}
          flexDirection="row"
          justifyContent="space-around"
          style={{ width: wp("95%") }}
        >
        <Box 
          ml={10} 
          justifyContent="space-around" 
          alignItems="center" 
          alignItems="center"
        >
          <Text style={styles.title}>⏰  {flightScheduleTime} </Text>
        </Box>

        <Box 
          justifyContent="center" 
          alignItems="center">
        </Box>

        <Box 
          mr={10} 
          justifyContent="space-around" 
          alignItems="center" 

        >
          <Text style={styles.title}>📍  {flightDestination} </Text>
        </Box>

      </Box>

      {/*Alt Kısım */}
      <Box 
        mb={10} 
        justifyContent="space-between" 
        alignItems="center" 
        flexDirection="row" style={{ width: wp("70%") }}
      >
        <Text style={styles.title}>📅  {flightScheduleDate} </Text>
        <Text style={styles.title}>✈️  {flightName} </Text>
      </Box>

    </Box>

    </Box>
      <Box 
        mt={10} 
        mx={2} 
        mb={320} 
        justifyContent="center" 
        alignItems="center"
      >
        <FlatList
          data={DATA}
          renderItem={(itemData) => <ItemRender item={itemData.item} />}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
        />
      </Box>
    </Box>
  );
};

export default apointment;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 18,
    color: "white"
  },
});