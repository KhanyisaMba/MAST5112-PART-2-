import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

interface MenuItem {
  name: string;
  description?: string;
  course?: string;
  price?: number;
}

interface HomeScreenProps {
  menuItems: MenuItem[];
  removeMenuItem: (item: MenuItem) => void;
  navigateToAddItem: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ menuItems, removeMenuItem, navigateToAddItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.count}>Total items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name || 'Unnamed Item'}</Text>
            <Text style={styles.itemDescription}>{item.description || 'No description available.'}</Text>
            <Text style={styles.itemCourse}>{item.course || 'Unspecified Course'}</Text>
            <Text style={styles.itemPrice}>${item.price !== undefined ? item.price : 'N/A'}</Text>
            <Button title="Remove" onPress={() => removeMenuItem(item)} />
          </View>
        )}
        keyExtractor={(item) => item.name || Math.random().toString()} // Fallback key
      />
      <Button title="Add Menu Item" onPress={navigateToAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  count: {
    fontSize: 18,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
    color: '#666',
  },
  itemCourse: {
    fontSize: 16,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  },
});

export default HomeScreen;