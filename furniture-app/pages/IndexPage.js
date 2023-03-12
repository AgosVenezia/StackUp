import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
import { data } from "../Content";
import Intl from "intl";
import "intl/locale-data/jsonp/en-ZA";

const IndexPage = ({navigation}) => {
    const addCommas = (num) => {
        return new Intl.NumberFormat("en-US",{
          style: "decimal",
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          currency: "USD"
        }).format(num);
      }
      
  return (
    <View style={{flex:1, marginTop: StatusBar.currentHeight}}>
      {/* Header */}
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.headerText}>Aguito's Furniture</Text>
          <Text style={{...styles.headerText, fontSize:15}}>The best furniture in the world</Text>
        </SafeAreaView>
      </View>
      {/* Scrollview */}
      <ScrollView style={{flexGrow:0, flexShrink:1}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity 
              key={index} 
              style={styles.container}
              onPress={() => navigation.navigate("DetailPage", {item})}
            >
              <Image style={styles.image} source={item.image} />
              <View style={styles.innerImage}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={{...styles.text, color:"gray"}}>${addCommas(item.price)}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'green',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign:"left"
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'cover'
    },
    innerImage: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black'
    },
    container: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  });
 
export default IndexPage;