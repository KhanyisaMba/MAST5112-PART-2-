import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MenuItemForm from './MenuItemForm'; // Make sure to import from the correct location

interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: number;
}

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const handleAddItem = (item: MenuItem) => {
    setMenuItems([...menuItems, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.count}>Total items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemCourse}>{item.course}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
      <MenuItemForm onAddItem={handleAddItem} />
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
    marginBottom: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
  },
  itemCourse: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  }
}); 

export default HomeScreen;