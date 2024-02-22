import React from 'react';
import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { themeColors } from '../theme';
import FormagerieCard from './FormagerieCard';
export default function FeaturedRow({ title, description, Fromagerie }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs" > {description} </Text>
        </View>
        
            <TouchableOpacity>
                <Text style={{color:themeColors.text}} className="font-semibold"> voir plus </Text>
            </TouchableOpacity>
            </View>
        <ScrollView  horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15
        }} className="overflow-visible py-5">
            {
                Fromagerie.map((Fromagerie ,index)=>{
                    return(
                         <FormagerieCard
                          item={Fromagerie}
                          key={index}
                         />
                    )
                })
            }
        </ScrollView>
   
    </View>
  );
}
