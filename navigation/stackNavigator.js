import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
    );
}