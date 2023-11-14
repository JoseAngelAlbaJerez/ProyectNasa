import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const Header = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Text style={styles.header}>Header</Text>
            </View>
            <View style={styles.rightContainer}>
            <Text style={styles.header}>Header</Text>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      
        flexDirection: 'row',
      alignItems :'center',
    },
    leftContainer:{
        flex: 1,
        alignItems: 'flex-start',
    },
    rightContainer:{
       
        alignItems: 'flex-end',
    },
    image: {
        width: 60,
        height: 60,
    },
    header:{
        fontSize: 20,
        color:'#FFF',
      
    },
    
})
  
export default Header
    