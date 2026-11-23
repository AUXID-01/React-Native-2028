import {  StyleSheet, Text, View } from 'react-native'

import { useLocalSearchParams } from 'expo-router';


import { categories } from '@/data/categories';


import {SafeAreaView} from "react-native-safe-area-context"



const CategoryScreen = () => {
  const { id } = useLocalSearchParams();
  console.log(id)

  const category = categories.find((item)=>item.id ===id)

  console.log(category)
   
  return (
    <SafeAreaView>
    <View>
      <Text>Category with it's ID {id}</Text>
       <Text>{category?.name}</Text>
    </View>
    </SafeAreaView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})