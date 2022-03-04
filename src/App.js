import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";

import TabBar from "./component/tab-bar";
import SearchView from "./views/search";
import HistoryView from "./views/history";
import FavoriteView from "./views/favorite";
import DetailView from "./views/detail";
import ApoinmentView from "./views/apoinment";
import SeatSelectionView from "./views/seat-selection";
import QrCardView from "./views/qrCard";

import Box from "./component/box";
import theme from "./utils/theme";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Search" component={SearchView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
      <HomeStack.Screen name="SeatSelection" component={SeatSelectionView} />
      <HomeStack.Screen name="Apoinment" component={ApoinmentView} />
      <HomeStack.Screen name="goQrPage" component={QrCardView} />
    </HomeStack.Navigator>
  );
}

function HistoryStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="History" component={HistoryView} />
      <HomeStack.Screen name="goQrPage" component={QrCardView} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen
              name="History"
              component={HistoryStack}
              options={{ headerShown: false }}
            />

            <Tab.Screen
              name="Search"
              component={SearchStack}
              options={{ headerShown: false }}
            />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});