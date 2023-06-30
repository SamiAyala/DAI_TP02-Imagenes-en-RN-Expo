import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { StyleSheet, Text, View} from 'react-native';

const Card = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.imagen} source="https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg"></Image>
            <Text style={styles.texto}>Mocha</Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
    width:"90%",
    height: "40%",
    borderRadius:32,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden',
    position:'relative'
    },
    imagen: {
    
        flex: 1,
        width: '100%',
        contentFit:"cover",
        marginBottom:10,
      
    },
    texto:{
        color:"#fff",
        fontWeight:'bold',
        fontSize:20,
    }
});

export default Card;