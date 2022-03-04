import react from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Box from "./box";
import Button from "./button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "styled-system";

const Card = ({
  goCardDetail,
  route,
  scheduleDate,
  scheduleTime,
  flightName,
}) => {
  return (
    <Box
      as={Button}
      mt={30}
      bg="skyblue"
      style={{ height: hp("15%"), width: wp("90%") }}
      onPress={goCardDetail}
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
          justifyContent="space-around" 
          alignItems="center" 
          ml={10} 
          alignItems="center"
        >
        <Text style={styles.title}>⏰  {scheduleTime} </Text>
        </Box>
        <Box justifyContent="center" alignItems="center">
          
        </Box>

        <Box justifyContent="space-around" alignItems="center" mr={10}>
        <Text style={styles.title}>📍 {route} </Text>
        </Box>
      </Box>

      {/*alt kısım */}
      <Box mb={10} justifyContent="space-between" alignItems="center" flexDirection="row" style={{ width: wp("70%") }}>
      <Text style={styles.title}>📅  {scheduleDate} </Text>
      <Text style={styles.title}>✈️  {flightName} </Text>
      </Box>
    </Box>
    
  );
};

export default Card;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 14,
    color: "white"
  },
});