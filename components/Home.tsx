import React from "react";
import {StyleSheet, View} from 'react-native';
import Header from "./molecules/header";
const Home = () => {
    return(
        <View style={styles.container}>
            <Header/>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
}})
    export default Home