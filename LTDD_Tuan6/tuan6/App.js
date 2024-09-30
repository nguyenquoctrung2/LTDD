import { Text, SafeAreaView, StyleSheet,FlatList,View,Image,Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import data from './data';
// You can import supported modules from npm


// or any files within the Snack

export default function App() {
  const [items, setItems] = useState([]);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const json = data; 
        setItems(json);
      } catch (error) {
        console.error(error);
      } 
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.img}/>
            <View>
            <Text>{item.ct}</Text>
            <Text>{item.name}</Text>
            </View>
            <View style={{justifyContent:'space-around'}}>
            <Button> </Button>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
   item: {
    padding: 10,
    marginVertical: 1,
    backgroundColor: '#ffffff',
    flexDirection:'row'
  },
});
