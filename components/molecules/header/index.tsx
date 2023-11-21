import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const Header = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Text style={styles.header}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
           <Image source={require('../../../assets/NASALOGO.png')} style={styles.image}></Image>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
       
    },
    leftContainer:{
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer:{
       flex: 1,
        alignItems: 'flex-end',
    },
    image: {
        width: 70,
        height: 60,
    },
    header:{
        fontSize: 22,
        color:'#FFF',
        paddingLeft: 10,
      
    },
    
})
  
export default Header
    