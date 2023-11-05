import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//components
import Home from '../views/Home';
import AddFood from '../views/AddFood';
//types
import {RootStackParams} from '../types';

const Stack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='AddFood' component={AddFood} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;