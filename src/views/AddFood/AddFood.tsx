import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//components
import Header from '../../components/Header';
import { Button, Icon, Input } from '@rneui/themed';

const AddFood = () => {
    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.addFoodContainer}>
                <View style={styles.legendContainer}>
                    <Text style={styles.addFoodLegend}>Add food</Text>
                </View>
                <View style={styles.addFoodButtonContainer}>
                    <Button icon={<Icon name='add-circle-outline' color='#fff'/>} radius='lg' color='#4ecb71' />
                </View>
            </View>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBarInput}>
                    <Input placeholder='apples, pie, soda...'/>
                </View>
                <View style={styles.searchBarButton}>
                    <Button title='Search' color='#ade8af' titleStyle={styles.searchButtonTitle} radius='lg'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    addFoodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24
    },
    legendContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    addFoodButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    addFoodLegend: {
        fontSize: 20
    },
    searchBarContainer: {
        flexDirection: 'row'
    },
    searchBarInput: {
        // flex: 1.5,
        flex: 1,
        marginLeft: -12
    },
    searchBarButton: {
        // flex: 0.5,
        alignItems: 'flex-end'
    },
    searchButtonTitle: {
        color: '#000',
        fontSize: 14
    }
})

export default AddFood;