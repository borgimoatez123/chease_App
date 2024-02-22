import { View, Text, Touchable, TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
export default function FormagerieCard({item}) {
  return (
    <TouchableWithoutFeedback >
      <View 
      style={{shadowColor:themeColors.bgColor(0.2),
      shadowRadius:7}}
      className="mr-6 bg-white shadow-lg">
         <Image className="h-36 w-46 rounded-t-3xl" 
         style={{width:100,height:100}}
         source={item.image}/>
         <View className="px-3 pb-4 space-x-2">
           <Text className="text-lg font-bold">{item.name}</Text>
           <View className="flex-row items-center space-x-1">
             <Icon.Star className="bg-yellow-500-50 text-yellow-500"/>
             <Text className="text-xs" >
               <Text className="text-green-700">{item.stars}</Text>
               <Text className="text-gray-700">
                ({item.reviews} achete) 
                
               </Text>
             </Text>
           </View>
           <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width="18"height="15"/>
            <Text className="text-gray-700 text-xs">{item.address}</Text>
           </View>
         </View>
      </View>
    </TouchableWithoutFeedback>
  )
}