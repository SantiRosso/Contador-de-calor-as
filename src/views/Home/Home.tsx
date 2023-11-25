import React, {useState, useCallback} from 'react';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
//components
import Header from '../../components/Header';
import CaloriesModule from '../../components/CaloriesModule';
//hooks
import useFoodStorage from '../../hooks/useFoodStorage';
//types
import { Meal } from '../../types';

const Home = () => {

    const { onGetTodayFood } = useFoodStorage();
    const [todayFood, setTodayFood] = useState<Meal[]>([]);

    const loadTodayFood = useCallback(async () => {
        try {
            const todayFoodResponse = await onGetTodayFood();
            setTodayFood(todayFoodResponse);
        } catch (error) {
            setTodayFood([]);
            console.error(error);
        }
    }, []);

    useFocusEffect(useCallback(() => {
        loadTodayFood().catch(null);
    }, [loadTodayFood]));

    return(
        <View style={styles.container}>
            <Header />
            <CaloriesModule />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
    }
});

export default Home;