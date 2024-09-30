import { Text, SafeAreaView, StyleSheet,View,Image,Pressable, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
// You can import supported modules from npm
  
function HomeScreen1({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.styles1}>
        <Image source={require('./assets/vs_blue.png')}
                style={{width:'165px',height:'200px'}}></Image>
      </View>
      <View style={styles.styles2}>
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={styles.styles3}>
        <View style={styles.styles31}>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
        </View>
        <Text style={styles.title}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.styles4}>
      <Text style={styles.title1}>1.790.000 đ</Text>
      <Text style={styles.title2}>1.790.000 đ</Text>
      </View>
      <View style={styles.styles5}>
        <Text style={{color:'red',fontSize:14,fontWeight:'bold',margin:'25px'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('./assets/Group1.png')}
        style={{width:'20px',height:'20px',margin:'10px'}}></Image>
      </View>
      <View style={styles.styles6}>
        <Pressable onPress={() => navigation.navigate('Home2')}>
          <Text style={styles.title3}>4 MÀU-CHỌN MÀU</Text>
          <Image source={require('./assets/Vector.png')}
                  style={{width:'15px',height:'15px',position:'absolute',bottom:'7px',left:'325px'}}></Image>
        </Pressable>
      </View>
      <View style={styles.styles7}>
      <Button title='Chọn Mua'
        color='red'></Button>
      </View>
    </View>
  )
}
function Screen2(){
  const [currentImage, setCurrentImage] = useState(require('./assets/vs_blue.png')); 

  return(
    <View style={styles.container}>
      <View style={{flex:3,
    flexDirection:'row',
    justifyContent:'space-around'}}>
          <View style={styles.styles31}>
            <Image source={currentImage}
                      style={{width:'100px',height:'120px'}}></Image>
          </View>
          <Text style={{fontSize:12, marginHorizontal:10}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
        <View style={{flex:6,flexDirection:'column',backgroundColor:'gray',}}>
          <Text style={{fontSize:16, marginHorizontal:10, fontWeight:Blob}}>
            Chọn màu bên dưới:
          </Text>
          <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
            <Pressable style={{flex:1,alignItems:'center',backgroundColor:'cyan',width:80,borderWidth: 1,borderColor: 'black', margin:3}} onPress={() => handlePress('Xanh')}><View/></Pressable>
            <Pressable style={{flex:1,alignItems:'center',backgroundColor:'red',width:80,borderWidth: 1,borderColor: 'black',margin:3}} onPress={() => handlePress('Đỏ')}><View/></Pressable>
            <Pressable style={{flex:1,alignItems:'center',backgroundColor:'black',width:80,borderWidth: 1,borderColor: 'black',margin:3}} onPress={() => handlePress('Đen')}><View/></Pressable>
            <Pressable style={{flex:1,alignItems:'center',backgroundColor:'purple',width:80,borderWidth: 1,borderColor: 'black',margin:3}} onPress={() => handlePress('Tím')}><View/></Pressable>
          </View>
        <View style={{
    flexDirection:'column',
    justifyContent:'center',
    borderWidth:'1px',
    borderRadius:'10px',
    backgroundColor:'cyan',
    width:'300px',
    marginHorizontal:10}}>
        <Pressable >
          <Text style={styles.title3}>Xong</Text>
        </Pressable>
      </View>
        </View>
      </View>
  )
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen1} />
        <Stack.Screen name="Home2" component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    margin:'10px',
  },
  styles1:{
    flex:8,
    //justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  styles2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  styles3:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  styles31:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  styles4:{
    flex:1,
    flexDirection:'row',
    // justifyContent:'space-around',
    alignItems:'center',
  },
  styles5:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  styles6:{
    flex:1,
    flexDirection:'column',
    gap:'10px',
    justifyContent:'center',
    borderWidth:'1px',
    borderRadius:'10px',
  },
  styles7:{
    flex:2,
    flexDirection:'column',
    gap:'10px',
    justifyContent:'flex-end',
  },
  title:{
    paddingTop:10,
    fontSize:16,
  },
  title1:{
    fontSize:25,
    fontWeight:'bold',

    margin:'25px'
  },
  title2:{
    fontSize:16,
    color:'grey',
  },
  title3:{
    textAlign:'center',
    padding:'5px',
    fontSize:16,
  }
});
