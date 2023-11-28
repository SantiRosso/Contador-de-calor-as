import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const TodayCalories = () => {
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <CircularProgress value={10} />
            </View>
            <View style={styles.rightContainer}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    leftContainer: {

    },
    rightContainer: {
        
    }
})

export default TodayCalories;