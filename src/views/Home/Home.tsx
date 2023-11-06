import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//components
import Header from '../../components/Header';

const Home = () => {
    return(
        <View style={styles.container}>
            <Header />
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