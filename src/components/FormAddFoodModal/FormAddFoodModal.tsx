import React from 'react';
import { View, StyleSheet } from "react-native";
import { Input, Text } from "@rneui/themed";


const FormAddFoodModal = () => {
    return(
        <View style={styles.formItem}>
            <View style={styles.inputContainer}>
                <Input/>
            </View>
            <View style={styles.legendContainer}>
                <Text style={styles.legend}>KCAL</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        flex: 2
    },
    legendContainer: {
        flex: 1
    },
    legend: {
        fontWeight: '500'
    }
})

export default FormAddFoodModal;