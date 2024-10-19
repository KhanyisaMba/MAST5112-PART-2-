import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


interface Props {
  onAddItem: (item: { name: string; description: string; course: string; price: number }) => void;
}

const MenuItemForm = ({ onAddItem }: Props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  const courses = ['Starters', 'Mains', 'Desserts'];

  const handleSubmit = () => {
    if (name && description && course && price) {
      onAddItem({ name, description, course, price: parseFloat(price) });
      setName('');
      setDescription('');
      setCourse('');
      setPrice('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Dish name"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
      />
      <Picker
        selectedValue={course}
        onValueChange={setCourse}
        style={styles.picker}
      >
        <Picker.Item label="Select a course" value="" />
        {courses.map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <TextInput onPress={handleSubmit}>Add Item</TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  picker: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
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
    fontSize: 16, // add a font size here
  },
  itemCourse: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
  },
});

export default MenuItemForm;