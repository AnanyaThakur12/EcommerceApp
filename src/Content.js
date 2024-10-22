import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Content = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Log out
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Click me !
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'olive',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 50,
    marginBottom: 20,
    width: 200,
    maxWidth: 200,
    alignItems: 'center',
    height: 60,
    marginLeft: 30,
  },
});
