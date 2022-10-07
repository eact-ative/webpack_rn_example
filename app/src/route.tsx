import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}



const Page1 = React.lazy(
    () => import(/* webpackChunkName: "page1" */ './pages/page1')
);

const Page2 = React.lazy(
    () => import(/* webpackChunkName: "page2" */ './pages/page2')
);

const Page1Screen = () => {
    return (
        <React.Suspense fallback={<Text>Loading...</Text>}>
            <Page1Screen />
        </React.Suspense>
    );
};

const Page2Screen = () => {
    return (
        <React.Suspense fallback={<Text>Loading...</Text>}>
            <Page1Screen />
        </React.Suspense>
    );
};

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Page2Screen" component={Page2Screen} />
                <Stack.Screen name="Page2Screen" component={Page2Screen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;