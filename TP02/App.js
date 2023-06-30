import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Card from './Components/Card';
import {Dimensions} from 'react-native';
import { Image } from 'expo-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d799ce43923865.58016e78230e2.png"></Image>
      <Text style={styles.texto}>Try some of our most popular flavours!</Text>
      <Card></Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:windowWidth,
    height:windowHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:0,
  },
  imagen: {
    width:'100%',
    height: '35%',
    resizeMode: "contain",

  },
  texto:{
    color:"#000000",
    fontWeight:'bold',
    fontSize:20,
    marginBottom:60,
}
});
