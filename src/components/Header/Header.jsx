import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@rneui/themed';
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const staticInfo = {
    name: 'Santiago Rosso',
    uri: 'https://images.unsplash.com/photo-1592903204858-e288251ad9cc?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlJTIwY2FtaW5hbmRvfGVufDB8fDB8fHww'
}

const Header = () => {

    const { canGoBack, goBack } = useNavigation();

    return(
        <View style={styles.container}>
            {canGoBack() ? (
                <View style={styles.arrowContainer}>
                    <Button icon={<Icon name='arrow-back' size={24} />} type='clear' onPress={() => goBack()} />
                </View>
            ) : undefined}
            <View style={styles.leftContainer}>
                <Text style={styles.name}>{`Hello ${staticInfo.name}`}</Text>
                <Text style={styles.subtitle}>Welcome back to your goal</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image source={{uri: staticInfo.uri}} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    subtitle: {
        fontSize: 12,
        color: '#808080',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 24
    },
    arrowContainer: {
        marginLeft: -12
    }
})

export default Header;