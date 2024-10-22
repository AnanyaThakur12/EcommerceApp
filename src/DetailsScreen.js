// DetailsScreen.js
import React from 'react';
import { Button, View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
