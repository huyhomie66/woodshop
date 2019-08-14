import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Info = ({ navigation }) => {
  const deviceInfor = Dimensions.get('window');
  const data = navigation.getParam('data');
  return (
    <ScrollView style ={{backgroundColor: '#ECECEC'}}>
      <Image source={data.image} resizeMode="cover" style={{ height: deviceInfor.height * 0.35, width: deviceInfor.width, alignSelf: 'center', }} />
      <View style={{ height: deviceInfor.height * 0.33, justifyContent: 'flex-start', paddingLeft: 10, paddingTop: 10, paddingBottom: 0 , backgroundColor: 'white'}}>
        <Text style={{ fontSize: 20, fontWeight: '400', lineHeight: 25 }}>{data.title}</Text>
        <Text style={{ color: '#f5a623', fontSize: 20, fontWeight: '600', lineHeight: 27, paddingTop: 10 }}>{data.price}</Text>
        <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, paddingTop: 7, color: 'gray', paddingVertical: 10 }}>{data.sale}</Text>
        <Text style={{ fontSize: 16, fontWeight: '400', lineHeight: 20, color: '#4a4a4a' }}>When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent a lot of time actually playing the video game Paperboy, so I knew I had what it took to get the job done. But, its just not that easy. </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'space-around', paddingLeft: 10, backgroundColor: 'white', marginTop:5 }}>
        <Text style={{ fontSize: 14, fontWeight: '400', lineHeight: 18 }}>Provided by: </Text>
        <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 10, fontWeight: '400', lineHeight: 25 }}>{data.company}</Text>
        <Text style={{ fontSize: 12, paddingVertical: 5, fontWeight: '400', lineHeight: 20 }}> 113-803-4242</Text>
        <Text style={{ fontSize: 12, paddingVertical: 5, fontWeight: '400', lineHeight: 20 }}> 700 Hoeger Squares</Text>
      </View>
      <View style={{ flexDirection: 'row',  backgroundColor: 'white' }}>
        <TouchableOpacity style={{ height: 50, width: deviceInfor.width * 0.5, backgroundColor: '#9b9b9b', justifyContent:'center', alignItems:'center', flex:1 }}>
          <Text style={{ fontSize: 17, fontWeight: '400', lineHeight: 21, textAlign: 'center', fontWeight:'bold', color:'white' }}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 50, width: deviceInfor.width * 0.5, backgroundColor: '#f5a623',justifyContent:'center', alignItems:'center', flex:1 }}>
          <Text style={{ fontSize: 17, fontWeight: '400', lineHeight: 21, textAlign: 'center', fontWeight:'bold', color:'white' }}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Info;
