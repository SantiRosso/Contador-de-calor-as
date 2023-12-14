import React, {useState, useCallback} from 'react';
import { View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
//components
import Header from '../../components/Header';
import CaloriesModule from '../../components/CaloriesModule';
import TodayCalories from '../../components/TodayCalories';
//hooks
import useFoodStorage from '../../hooks/useFoodStorage';
//types
import { Meal } from '../../types';
import { TodayCaloriesProps } from '../../types';
import TodayMeals from '../../components/TodayMeals';

const totalCaloriesPerDay = 2000;

const Home = () => {

    const { onGetTodayFood } = useFoodStorage();
    const [todayFood, setTodayFood] = useState<Meal[]>([]);
    const [todayStatistics, setTodayStatistics] = useState<TodayCaloriesProps>({
        consumed: 0,
        remaining: 0,
        percentage: 0,
        total: 0,
      })

    const calculateTodayStatistics = (meals: Meal[]) => {
        try {
            const caloriesConsumed = meals.reduce((acum, curr) => acum + Number(curr.calories), 0);
            const remainingCalories = totalCaloriesPerDay - caloriesConsumed;
            const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100;
        
            setTodayStatistics({
                consumed: caloriesConsumed,
                percentage,
                remaining: remainingCalories,
                total: totalCaloriesPerDay
            })

        } catch (error) {
            console.error(error);
        }
    }

    const loadTodayFood = useCallback(async () => {
        try {
            const todayFoodResponse = (await onGetTodayFood()) as Meal[];
            
            calculateTodayStatistics(todayFoodResponse);
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
            <TodayCalories {...todayStatistics}/> 
            <TodayMeals foods={todayFood}/>
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