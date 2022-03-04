import react, { useEffect, useState } from "react";
import Box from "./box";
import Button from "./button";
import Text from "./text";
import { Alert } from "react-native";

const seatComponent = ({
  item,
  flightDestination,
  flightScheduleDate,
  flightScheduleTime,
  flightName,
  actualLandingTime,
  storeData,
  isFutureToday,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Box
      as={Button}
      disabled={!isFutureToday}
      style={{ padding: 20 }}
      onPress={() => {
        Alert.alert(
          "Reservation",
          `${
            item + 1
          } Do you reserve seat numbered and confirm your ticket? 🤩`,
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {
                setIsSelected(false);
              },
            },
            {
              text: "Accept",
              style: "cancel",
              onPress: () => {
                storeData({
                  item: item + 1,
                  flightDestination: flightDestination,
                  flightScheduleDate: flightScheduleDate,
                  flightScheduleTime: flightScheduleTime,
                  flightName: flightName,
                  actualLandingTime: actualLandingTime,
                });
              },
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {
              Alert.alert("");
            },
          }
        ),
          setIsSelected(true);
      }}
    >
      <Box
        justifyContent="center"
        alignItems="center"
        bg={isSelected ? "red" : "pink"}
        borderRadius={8}
        p={15}
        width={150}
        height={100}
      >
        <Text style={{ fontSize: 34, color: "white", fontWeight:"500"}}>
         {item+1}💺
        </Text>
       
      </Box>
    </Box>
  );
};

export default seatComponent;