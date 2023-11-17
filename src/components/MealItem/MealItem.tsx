import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Meal } from '../../types';
import { Button, Icon } from '@rneui/themed';


const MealItem: FC<Meal> = ({calories, name, portion}) => {
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.portion}>{portion}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Button icon={<Icon name='add-circle-outline'/>} type='clear'/>
                <Text style={styles.calories}>{calories}</Text>
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
    name: {

    },
    portion: {

    },
    calories: {
        
    }
})

export default MealItem;