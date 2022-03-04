import react from "react";
import { Text, StyleSheet } from "react-native";
import Box from "./box";
import Button from "./button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TicketCard = ({
  goQrPage,
  seatNumber,
  scheduleDate,
  scheduleTime,
  flightName,
  actualLandingTime,
  flightDestination,
}) => {
  return (
    <Box
      mt={10}
      bg="skyblue"
      style={{ height: hp("25%"), width: wp("90%") }}
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
          ml={5} 
          alignItems="center" 
          justifyContent="space-around"
        >
          <Text style={styles.title}>📍  AMS </Text>
          <Text style={styles.title}>⏰  {scheduleTime} </Text>
        </Box>
        
        {/*🚨 Bilet Ortasında QR Gösterme Fakat Kasma Yaptı. 🚨*/}

        {/* <Box justifyContent="center" alignItems="center">
          <QrCard 
          fligtName={flightName} 
          flightDate={scheduleDate} 
          fligtTime={scheduleTime} 
          flightRoute={flightDestination}/>
        </Box> */}

        <Box justifyContent="space-around" alignItems="center" mr={5}>
          <Text style={styles.title}>🏁  {flightDestination} </Text>
          <Text style={styles.title}>📅   {scheduleDate} </Text>
        </Box>
      </Box>

      {/*alt kısım */}
      <Box 
        justifyContent="space-around" 
        alignItems="center" 
        flexDirection="row"   
        style={{ width: wp("90%") }}
      >
        <Text style={styles.title}>✈️  {flightName}</Text>
        <Text style={styles.title}>💺  {seatNumber}</Text>
      </Box>

      <Box  
        style={{ width: wp("90%") }} 
        justifyContent="center" 
        alignItems="center" 
      >
        <Box 
          as={Button}
          onPress={goQrPage}
          mb={5} 
          bg={"pink"} 
          justifyContent="center" 
          alignItems="center" 
          borderRadius={8} 
          style={{ width: wp("40%"), height: hp("5%") }}
        >
          <Text style={styles.titleQr}>QR Code Görüntüle</Text>
        
        </Box>

      </Box>

    </Box>
  );
};

export default TicketCard;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 18,
    color: "white"
  },
  titleQr: {
    fontWeight: "700",
    fontSize: 14,
    color: "white"
  },
});