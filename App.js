import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store'; // Import your Redux store
import HomeScreen from './screens/HomeScreen';
import Dishscreen from './screens/Dishscreen'
import AddToCartPage from './components/AddToCartPage';

const Stack = createNativeStackNavigator();

// Wrap your code inside a function, such as a functional component
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dish" component={Dishscreen} />
          <Stack.Screen name="Cart" component={AddToCartPage} />
          {/* Add more screens as needed */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
