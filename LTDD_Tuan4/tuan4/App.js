import { Text, SafeAreaView, StyleSheet,Image,View,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
export default function App() {
    const [count, setCount] = useState(0);
    const [price,setPrice] = useState(0);
    const increase = () => {
    setCount(count + 1);
    setPrice(141800*(count+1));
  };
   const decrease = () => {
    setCount(count - 1);
    setPrice(141800*(count-1));
    if(count<1){
      setCount(0);
      setPrice(141800);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewtong}>
        <Image
          source={require('./assets/book.png')} // Đường dẫn tới ảnh trong dự án
          style={styles.image}
        />
        <View style={styles.viewphu}>
          <Text style={styles.paragraph}>
          Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.paragraph}>
          Cung cấp bởi Tiki Trading
          </Text>
          <Text style={styles.so}>
            141.800 đ
          </Text>
          <Text style={styles.so2}>
            141.800 đ
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={increase}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          <Text style={styles.count}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={decrease}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
           <View style={styles.muathem}>
            <TouchableOpacity>
              <Text style={{color:'blue'}}>Mua Sau</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={{flex:3,flexDirection:'row'}}>
        <Text style={{fontSize: 11, fontWeight: 'bold',left:'13px'}}> Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={{color:'blue',marginHorizontal:15,left:'13px', fontSize:11}}> Xem tại đây </Text>
        </TouchableOpacity>
        <Text style={styles.count}>{price}</Text>
      </View>
      <View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
  },
  viewtong:{
    flex:1,
    justifyContent:'flex-start',
    flexDirection:'row',
  },
  viewphu:{
    flexDirection:'column',
    left:10,
    top:10,
    marginHorizontal: 10,
  },
  paragraph: {
    margin:3,
    fontSize: 14,
    fontWeight: 'bold',
  },
  so: { 
    margin:3,
    fontSize: 18,
    fontWeight: 'bold',
    color:'red'
  },
   so2: {
    margin:4,
    fontSize: 12,
    textDecoration: 'line-through',
    color:'#808080'
 },
 image:{
   height:'127px',
   width:'104px',
   top:'14px',
   left:'13px'
 },
  buttonContainer:{
    flexDirection:'row',
    marginHorizontal:4,
  },
  buttonText:{
    borderRadius: 5,
    width: 10,
  },
  muathem:{
    flex:1,
    alignItems:'flex-end',
  }
});
