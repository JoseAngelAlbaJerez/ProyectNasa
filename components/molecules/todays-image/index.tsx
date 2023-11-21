import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

import { PostImage } from '../../types';

const TodaysImage: FC<PostImage> = ({date, title, url}) => {
return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>

            {/* Normalmente se pone uri:url pero hay sobrecarga de respuestas */}
            <Image source={{uri: url}} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.ButtonContainer}>
        <Button title='View' />
        </View>
    </View>
)
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2c449d',
        marginVertical: 16,
        borderRadius: 32,
        padding: 16,    
        marginHorizontal: 24,
    },  
    imageContainer:{
      alignItems: 'center',
    },
    image:{
        width: '100%',//Normalmente es '100%' pero tiene una imagen fija no de la API porque hay sobrecarga de Respuestas
        borderRadius: 32,
        height: 190,
        borderWidth: 2,
        borderColor: '#fff',
    },
    title:{
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
    },
    date:{
        color: '#fff',
    },
    ButtonContainer:{
        alignItems: 'flex-end',
    }

});

export default TodaysImage;