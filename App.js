import React, { Component } from "react";
import { Text, View } from "react-native";
import Routes from "./Routes";
import { NavigationProvider, StackNavigation } from "@expo/ex-navigation";
import { Provider } from "react-redux";
import store from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationProvider router={Routes}>
          <StackNavigation initialRoute="home" />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App;
