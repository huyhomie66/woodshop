import React from 'react';
import { Image, View, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import data from './data';
import { SimpleLineIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const deviceInfo = Dimensions.get('window');

const icon = [
  { component: <Feather name="percent" color="white" size={25} />, title: 'sale' },
  { component: <Feather name="gift" color="white" size={25} />, title: 'gift' },
  {
    component: <MaterialCommunityIcons name="flash-outline" color="white" size={25} />,
    title: 'Deal',
  },
  {
    component: <MaterialCommunityIcons name="shield-check-outline" color="white" size={25} />,
    title: 'Guarantee',
  },
  { component: <SimpleLineIcons name="tag" color="white" size={25} />, title: 'Discount' },
];
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: '#ECECEC' }}>
      <Image source={data.livingRoom.imageTab} resizeMode="contain" style={{ height: deviceInfo.height * 0.3, width: deviceInfo.width }} />
      <FlatList
        style={{ height: deviceInfo.height * 0.14, alignSelf: 'center' }}
        data={icon}
        horizontal
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <View key={item.id} style={{ alignItems: 'center' }}>
            <TouchableOpacity
              key={item.id}
              style={{
                backgroundColor: '#f5a623',
                borderRadius: 50,
                padding: 15,
                alignItems: 'center',
                margin: 10,
              }}
            >
              {item.component}
            </TouchableOpacity>
            <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 14 }}>{item.title}</Text>
          </View>
        )}
      />
      <Text style={{ fontSize: 17, fontWeight: '700', paddingLeft: 10 }}>{data.livingRoom.title}</Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {data.livingRoom.Field.map((item, index) => (
          <View style={{ margin: 5, backgroundColor: 'white' }} key={index}>
            <TouchableOpacity onPress={() => navigation.navigate('Info', { data: item, margin: 2 })}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: deviceInfo.width * 0.47,
                  height: deviceInfo.height * 0.2,
                }}
              />
            </TouchableOpacity>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 14, lineHeight: 18 }}>{item.title}</Text>
              <Text style={{ color: '#f5a623', fontSize: 16, fontWeight: '600', lineHeight: 20 }}>{item.price}</Text>
              <Text style={{ fontSize: 10, color: 'gray', fontWeight: '400', paddingTop: 4, lineHeight: 15 }}>{item.sale}</Text>
              <Text style={{ fontSize: 12, paddingTop: 10, fontWeight: '400', lineHeight: 15 }}>{item.company}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 17, fontWeight: '700', paddingLeft: 10, paddingTop: 20 }}>{data.diningRoom.title}</Text>

      <Image source={data.diningRoom.imageTab} resizeMode="contain" style={{ height: deviceInfo.height * 0.3, width: deviceInfo.width }} />
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {data.diningRoom.Field.map((item, index) => (
          <View key={index} style={{ margin: 5, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Info', { data: item })}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: deviceInfo.width * 0.47,
                  height: deviceInfo.height * 0.2,
                }}
              />
            </TouchableOpacity>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 14, lineHeight: 18 }}>{item.title}</Text>
              <Text style={{ color: '#f5a623', fontSize: 16, fontWeight: '600', lineHeight: 20 }}>{item.price}</Text>
              <Text style={{ fontSize: 10, color: 'gray', fontWeight: '400', paddingTop: 4, lineHeight: 15 }}>{item.sale}</Text>
              <Text style={{ fontSize: 12, paddingTop: 10, fontWeight: '400', lineHeight: 15 }}>{item.company}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
