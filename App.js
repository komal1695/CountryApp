/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// imports for rounting screens 

import CapitalWeather from "./screens/CapitalWeather";
import CountryDetails from "./screens/CountryDetails";
import Home from "./screens/Home";

// Stacks for screens 

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    CountryDetails: CountryDetails,
    CapitalWeather: CapitalWeather

  },
  {
    headerMode: "none",
    initialRouteName: "Home"
  }

);

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
