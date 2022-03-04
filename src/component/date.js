import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";

const DatePickerApp = ({setDateName, dateName}) => {
  const [date, setDate] = useState("0403-2022");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
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
              backgroundColor: "white",
              borderColor: "skyblue",
              alignItems: "flex-start",
              borderWidth: 1,
              borderBottomWidth: 1,
              borderRadius:8
            },
            placeholderText: {
              fontSize: 17,
              color: "skyblue",
            },
            dateText: {
              left:10,
              fontSize: 20,
              fontWeight: "500",
            },
          }}
          onDateChange={(date) => {
            setDateName(date);
            console.log(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DatePickerApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "skyblue",
  },
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
  datePickerStyle: {
    left:5,
    width: 390,
  },
  text: {
    textAlign: "left",
    width: 250,
    fontSize: 16,
    color: "#000",
  },
});


