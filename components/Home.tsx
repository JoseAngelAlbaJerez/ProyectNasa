import React, {useEffect, useState} from "react";
import {StyleSheet, View} from 'react-native';
import Header from "./molecules/header";
import fetch from "../utils/fetch";
import TodaysImage from "./molecules/todays-image";
import { PostImage } from "./types";
import { format, sub } from "date-fns";
import LastFiveDaysImg from "./molecules/last-five-days-images";

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [lastFiveDaysImages, setlastFiveDaysImages] = useState<PostImage[]>([]);
    useEffect(() => {
       
        const loadTodayImage = async () => {
            try {
                const todaysImageResponse = await fetch();
               setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.error("Error loading today's image:", error);
                setTodaysImage({});
            }
        };

        const loadLast5DaysImage = async () => {
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');  // Corrected format
                const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd');  // Corrected format
        
                const lastFiveDaysImagesResponse = await fetch(
                    `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
                );
        
                setlastFiveDaysImages(lastFiveDaysImagesResponse);
            } catch (error) {
                console.error(error);
            }
        }
        loadTodayImage().catch(null);
        loadLast5DaysImage().catch(null);
    }, []);
   


    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImg postImages={lastFiveDaysImages} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
}})
    export default Home