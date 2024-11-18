import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; // Adjust the path as necessary
import MenuItemForm from './MenuItemForm'; // Adjust the path as necessary
import { MenuItem } from './calculateAveragePrice'; // Adjust the path as necessary
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const handleAddItem = (item: MenuItem) => {
    setMenuItems((currentItems) => [...currentItems, item]);
  };

  const handleRemoveItem = (itemToRemove: MenuItem) => {
    setMenuItems((currentItems) => currentItems.filter(item => item !== itemToRemove));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
              removeMenuItem={handleRemoveItem}
              navigateToAddItem={() => props.navigation.navigate('Add Item')}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Add Item">
          {(props) => <MenuItemForm {...props} onAddItem={handleAddItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;