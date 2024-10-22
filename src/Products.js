import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Products({navigation}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    const url = 'https://dummyjson.com/products';
    let result = await fetch(url);
    result = await result.json();
    setData(result.products);
    setLoading(false);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Description', {product: item});
        }}>
        <View
          style={{
            width: 100,
            marginTop: 20,
            marginHorizontal: 3,
            height: 250,
            backgroundColor: 'white',
            borderRadius: 10,
            alignItems: 'center',
            padding: 10,
          }}>
          <Image
            source={{uri: item.images[0]}}
            style={{width: 110, height: 110, borderRadius: 20}}
            resizeMode="contain"
          />
          <Text style={{fontSize: 14, color: 'black'}}>{item.title}</Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              marginLeft: -25,
              marginTop: 10,
            }}>
            ₹ {item.price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              marginLeft: -30,
              marginTop: 10,
            }}>
            <FeatherIcon name="thumbs-up" size={20} color="black"></FeatherIcon>
             {item.rating}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 12,
      }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          numColumns={3}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: 20}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      )}
    </View>
  );
}
