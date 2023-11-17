import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Button, Icon, Input } from '@rneui/themed';
//hooks
import useFoodStorage from '../../hooks/useFoodStorage';
//components
import Header from '../../components/Header';
import AddFoodModal from '../../components/AddFoodModal';
//types
import { Meal } from '../../types';
import MealItem from '../../components/MealItem';

const AddFood = () => {

    const [visible, setVisible] = useState<boolean>(false)
    const [foods, setFoods] = useState<Meal[]>([])
    const {onGetFood} = useFoodStorage();

    const loadFoods = async () => {
        try {
            const foodsResponse = await onGetFood();
            setFoods(foodsResponse);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadFoods().catch(null);
    }, []);

    const handleModalClose = async (showUpdate?: boolean) => {
        if(showUpdate){
            Alert.alert('Comida guardad exitosamente');
            loadFoods();
        }
        setVisible(false);
    }

    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.addFoodContainer}>
                <View style={styles.legendContainer}>
                    <Text style={styles.addFoodLegend}>Add food</Text>
                </View>
                <View style={styles.addFoodButtonContainer}>
                    <Button icon={<Icon name='add-circle-outline' color='#fff'/>} radius='lg' color='#4ecb71' onPress={() => setVisible(true)}/>
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
            <ScrollView style={styles.content}>
                {foods?.map(meal => <MealItem key={`my-meal-item-${meal.name}`} {...meal}/>)}
            </ScrollView>
            <AddFoodModal visible={visible} onClose={handleModalClose}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: '#fff',
        flex: 1
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
    },
    content: {

    }
})

export default AddFood;