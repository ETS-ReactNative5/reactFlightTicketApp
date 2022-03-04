import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from "react-native";
import Card from "../component/card"
import Box from "../component/box";
import axios from "axios";

function DetailView({navigation, route}) {
  const routeName = route.params.routeNameProp;
  const routeDate = route.params.dateNameProp;

  const [flightList, setFlightList] = useState([]);

  const apiUrl = "https://api.schiphol.nl/public-flights/flights?";
  const baseUrl = `${apiUrl}scheduleDate=${routeDate}&route=${routeName}`;
 
  //Api'ye request yolladığımız fonksiyon.
  async function fetchData() {
    const response = await axios.get(baseUrl,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          app_id: "22ced285",
          app_key: "6a682c6a07befef04720a1ee9ad01494",
          ResourceVersion: "v4",
        },
      }
    );
    setFlightList([...response.data.flights]);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const renderFlight = ({ item }) => (
    <Card
      route={item.route.destinations[0]} //Uçuş Rotası
      scheduleDate={item.scheduleDate} //Uçuş Tarihi
      scheduleTime={item.scheduleTime} //Uçuş Saati
      flightName={item.flightName} //Uçuş Adı
      goCardDetail={() => {
        navigation.navigate("Apoinment", {
          flightDestination: item.route.destinations[0],
          flightScheduleDate: item.scheduleDate,
          flightScheduleTime: item.scheduleTime,
          flightName: item.flightName,
          actualLandingTime: item.actualLandingTime,
        }); 
      }}
    />
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Box mt={10}>
        <FlatList data={flightList} renderItem={renderFlight} />
      </Box>
      
    </View>
  );
}

export default DetailView;
