import React, { FC } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
//components
import MealItem from "../MealItem";
//types
import { TodayMealsProps } from "../../types";
import { Meal } from "../../types";

const TodayMeals: FC<TodayMealsProps> = ({ foods }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comidas</Text>
            <ScrollView style={styles.content}>
                {
                    foods?.map((meal: Meal, index) => <MealItem key={`today-meal-item-${meal.name}`} {...meal}/>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
    }, 
    content: {
        marginVertical: 16,
    },
    title: {
        fontSize: 16,
    }
});

export default TodayMeals;