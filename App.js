import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AddContactScreen from './Screens/AddContactScreen';
import ContactListScreen from './Screens/ContactListScreen';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='contacts'>
          <Stack.Screen 
            name='contacts'
            component={ContactListScreen}
            options={{ title: 'Contact List'}}
          />
          <Stack.Screen
            name='addContact' 
            component={AddContactScreen}
            options={{ title: 'Add Contact' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}
