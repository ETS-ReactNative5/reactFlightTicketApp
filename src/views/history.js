import { Text, View, FlatList } from "react-native";
import * as React from "react";

import react, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Box from "../component/box";
import TicketCard from "../component/ticket";

function HistoryView({ navigation }) {
  const [rezSave, setrezSave] = useState([]);

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

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [rezSave]);

  const renderTickets = ({ item }) => (
    <TicketCard
      seatNumber={item.item}
      scheduleDate={item.flightScheduleDate}
      scheduleTime={item.flightScheduleTime}
      flightName={item.flightName}
      actualLandingTime={item.actualLandingTime}
      flightDestination={item.flightDestination}
      goQrPage={() => {
        navigation.navigate("goQrPage", {
          flightName: item.flightName,
          flightDate: item.flightScheduleDate,
          flightTime: item.flightScheduleTime,
          flightRoute: item.flightDestination,
        });
      }}
    />
  );

  return (
    <Box style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Box mt={10}>
        <FlatList
          data={rezSave}
          renderItem={renderTickets}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
}

export default HistoryView;