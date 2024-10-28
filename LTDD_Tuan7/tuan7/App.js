import { StyleSheet, Text, View,Button,Image,TouchableOpacity, TextInput,FlatList } from 'react-native';
import { useState,useEffect  } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


function Home1({navigation}){
  return(
     <View style={styles.container}> 
            <View style={styles.style1}> 
                <Image source={require("./assets/Image95.png")}
                style={{width:"250px",height:"250px"}}></Image>
            </View>
            <View style={styles.style2}> 
                <Text style={styles.text1}>MANAGE YOUR {'\n'} TASK</Text>
            </View>
            <View style={styles.style3}> 
                <View style={styles.con}> 
                    <Image source={require("./assets/Frame.png")}
                        style={{width:"30px",height:"28px"}}></Image>
                    <TextInput placeholder='Enter your email' style={{
                        height:'80%',width:'100%'}}></TextInput>
                </View>
            </View>
            <View style={styles.style4}> 
                <TouchableOpacity style={{height:'25%',width:'60%',
            backgroundColor:'cyan',borderRadius:'10px', alignItems:'center'}} 
            onPress={()=>{navigation.navigate('Home2')}}><Text style={{textAlign:'center',
            padding:'10px',color:'white',fontSize:16,fontFamily:"Inter"}}>GET START</Text></TouchableOpacity>
            </View>
        </View>
  )
}
function Home2(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://6565ed57eb8bb4b70ef29963.mockapi.io/ghichu")
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
    }, []);
    //them
    const [noidungghichu, setNoidungghichu]=useState("");
    const addNote = (note) => {
      fetch("https://6565ed57eb8bb4b70ef29963.mockapi.io/ghichu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ noidungghichu: note }),
    })
      .then((response) => response.json())
      .then((json) => {
        setData((prevData) => [...prevData, json]);
      })
      .catch((error) => console.log(error));
    setNoidungghichu(""); 
    };
    //xoa
    const DeleteNote = async (id) => {
        await fetch(`https://6565ed57eb8bb4b70ef29963.mockapi.io/ghichu/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const newData = data.filter((item) => item.id !== id);
            setData(newData);
          })
          .catch((error) => console.error(error));
      };

  return(
     <View style={{flex: 1, backgroundColor: "#fff"}}>
  <View style={{flexDirection: 'row', borderWidth: 1, borderRadius: 3, borderColor: 'gray', height: 40, width: 300, alignItems: 'center', top: 40, left: 30, gap: 10}}>
    <Image
      source={require('./assets/kinhlup.png')}
      style={{height: 20, width: 20, resizeMode: 'contain', left: 5}}
    />
    <TextInput style={{height: 30, width: 260, borderRadius: 10, borderWidth: 1,paddingLeft: 10,}} onChangeText={setNoidungghichu} value={noidungghichu}></TextInput>
  </View>

  <View style={{flex: 1, top: 80}}>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={{height: 50, width: 300, borderRadius: 40, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', left: 30, marginBottom: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={() => {DeleteNote(item.id)}} style={{width: 50}}>
              <Image
                source={require('./assets/delete.jfif')}
                style={{height: 20, width: 20, resizeMode: 'contain', left: 5}}
              />  
            </TouchableOpacity>
            <Text style={{width: 200}}>{item.noidungghichu}</Text>
          </View>
        </View>
      )}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{paddingBottom: 80}} // Thêm khoảng cách dưới cùng cho cuộn
    />
  </View>

  <View style={{alignItems: 'center', padding: 20}}>
    <TouchableOpacity onPress={() => addNote(noidungghichu)} style={{height: 50, width: 50, backgroundColor: 'rgba(0, 189, 214, 1)', borderRadius: 60, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'white'}}>+</Text>
    </TouchableOpacity>
  </View>
</View>


  )
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home1} />
        <Stack.Screen name="Home2" component={Home2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      margin:'10px',
    },
    style1: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        paddingTop :82,
    },
    style2: {
        flex: 1,
        paddingTop : 30,
    },
    style3: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    con:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:'1px',
        borderRadius:'10px',
        height:'50%',
        width:'90%',
        position:'relative',
        gap:10,
    },
    style4: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'20px',
    },
    text1:{
        fontSize: 22,
        fontWeight:'bold',
        color:'#8353E2',
        textAlign:'center',
    },
});
