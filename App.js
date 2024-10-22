import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Login from './src/Login';
import SignUp from './src/SignUp';
import {StyleSheet, View} from 'react-native';
import Content from './src/Content';
import Products from './src/Products';
import ForgetScreen from './src/ForgetScreen';
import ForgetScreen2 from './src/ForgetScreen2';
import Description from './src/Description';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{flex: 1}}>
      {
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Content" component={Content} />
            <Stack.Screen name="ForgetScreen2" component={ForgetScreen2} />
            <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Description" component={Description} />
          </Stack.Navigator>
        </NavigationContainer>
      }
  
    </View>
  );
}

const style = StyleSheet.create({});
