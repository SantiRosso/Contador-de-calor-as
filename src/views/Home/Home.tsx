import React from 'react';
import { View, StyleSheet } from 'react-native';
//components
import Header from '../../components/Header';
import CaloriesModule from '../../components/CaloriesModule';

const Home = () => {
    return(
        <View style={styles.container}>
            <Header />
            <CaloriesModule />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
    }
})

export default Home;