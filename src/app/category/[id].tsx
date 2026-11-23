import { StyleSheet, Text, View } from 'react-native'

import { useLocalSearchParams } from 'expo-router';

import { categories } from '@/data/categories';



const CategoryScreen = () => {
  const { id } = useLocalSearchParams();
  console.log(id)

  const category = categories.find((item)=>item.id ===id)

  console.log(category)
   
  return (
    <View>
      <Text>Category with it's {id}</Text>
       <Text>{category?.name}</Text>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})