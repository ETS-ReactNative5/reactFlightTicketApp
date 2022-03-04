import React, { Component } from "react";
import { View } from "react-native";


import { QRCode, Canvas } from "easyqrcode-react-native";


const QrCard = ({ route }) => {
  const { flightName, flightDate, flightTime, flightRoute } = route.params;

  
  const generateQRCode = (canvas) => {
    if (canvas !== null) {
      // QRCode ayarlar
      var options = {
        text: `Flight Name: ${flightName}\n 
                FlightDate:   ${flightDate}\n 
                Flight Time:  ${flightTime}\n 
                Flight Route: ${flightRoute}`,
        width: 300,
        height: 300,
      };
      // QRCode Objesi Oluşturma
      var qrCode = new QRCode(canvas, options);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     
      <Canvas ref={generateQRCode} />
    </View>
  );
};

export default QrCard;