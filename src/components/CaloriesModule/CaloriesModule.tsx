import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../types';

const CaloriesModule = () => {

    const {navigate} = useNavigation<NativeStackNavigationProp<RootStackParams, 'Home'>>();

    const handleAddCaloriesPress = () => {
        navigate('AddFood')
    }

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.caloriesLegend}>Calories</Text>
            </View>
            <View style={styles.rightContainer}>
                <Button icon={<Icon name='add-circle-outline' color='#fff'/>} radius='lg' color='#4ecb71' onPress={handleAddCaloriesPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24, 
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    caloriesLegend: {
        fontSize: 20,
    }
})

export default CaloriesModule;