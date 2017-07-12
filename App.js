import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routes from './Routes'
import { NavigationProvider, StackNavigation} from '@expo/ex-navigation'

class App extends Component {

  render() {
    return (
      <NavigationProvider router={Routes}>
        <StackNavigation initialRoute="home" />
      </NavigationProvider>
    )
  }
}

export default App