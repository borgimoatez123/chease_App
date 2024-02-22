import { View, Text, ScrollView, Touchable, TouchableOpacity ,Image} from 'react-native'
import React, { useState } from 'react'
import { categories } from '../data'

export default function Categories() {
    const [activeCategory,setActiveCategory]=useState(null);
  return (
    <View className="mt-4">
     <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible"
     contentContainerStyle={{
        paddingHorizontal:15
     }}
     > 
       {
        categories.map((category,index)=>{
            let  isActive =category.id==activeCategory;
            let btnClass=isActive?'bg-gray-600':'bg-gray-200';
            let textClass=isActive?'font-semibold text-gray-800':'text-gray-500';
            return(
                <View key={index} className="flex justify-center items-center mr-6">
                    <TouchableOpacity
                    onPress={()=>setActiveCategory(category.id)}
                       className={"p-1 rounded-full shadow  bg-gray-200"+btnClass}>
                        <Image style={{width:50,height:40} }
                        source={category.image}/>
                        <Text className={"text-sm"+textClass}>{category.name}</Text>
                       </TouchableOpacity>
                </View>
            )
        })
       }
     </ScrollView>
          
    </View>
  )
}