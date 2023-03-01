/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={() => (
              <ScrollView keyboardDismissMode="interactive">
                <Text
                  style={{
                    height: 800,
                    marginVertical: 10,
                    backgroundColor: 'yellow',
                  }}>
                  yellow
                </Text>
                <TextInput style={{backgroundColor: 'red', height: 30}} />
                <Text
                  style={{
                    height: 100,
                    backgroundColor: 'green',
                  }}>
                  green
                </Text>
              </ScrollView>
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
export default App;
