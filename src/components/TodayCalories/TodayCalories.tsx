import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const TodayCalories = ({ total, consumed, remaining }) => {
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <CircularProgress value={10} valueSuffix='%'/>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.today}>Today</Text>
                <View style={styles.rightItem}>
                    <Text style={styles.rightItemLegend}>Total</Text>
                    <Text style={styles.rightItemValue}>{total}</Text>
                </View>
                <View style={styles.rightItem}>
                    <Text style={styles.rightItemLegend}>Consumed</Text>
                    <Text style={styles.rightItemValue}>{consumed}</Text>
                </View>
                <View style={styles.rightItem}>
                    <Text style={styles.rightItemLegend}>Remaining</Text>
                    <Text style={styles.rightItemValue}>{remaining}</Text>
                </View>
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
        
    },
    today: {

    },
    rightItem: {

    },
    rightItemLegend: {

    },
    rightItemValue: {

    }
})

export default TodayCalories;