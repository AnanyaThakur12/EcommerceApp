import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Description({route}) {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.images[0]}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
        ₹ {product.price}
      </Text>
      <Text style={styles.description}>
        {product.description || 'No description available.'}
      </Text>
      <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 16}}>
        {product.returnPolicy}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
  },
});
