
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../data';
import FeaturedRow from'../components/FeaturedRow';
import Line from '../components/Line'
export default function HomeScreen() {
    
  return (
   
    <SafeAreaView  className="bg-gray-100">
        <StatusBar  barStyle="dark-content"/>
        {/* bar de rechreche  */}
        <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
              <Icon.Search height="25" width="25" stroke="gray"/>
              <TextInput placeholder='type de formage ' className="ml-2 flex-1"/>
              <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                <Icon.MapPin height="20" width="20" stroke="gray"/> 
                <Text className="text-gray-600">Beja ,TUN</Text>
              </View>
        </View>
          <View  style={{backgroundColor:themeColors.bgColor(5)}}className="p-3 rounded-full " >
            <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
          </View>
        </View>
        <View style={styles.container}>

    <Line color="red" thickness={2} style={{ marginVertical: 10 }} />
    
  </View>
        {/* body*/}
        <View>
          <ScrollView showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom:20
              }}>
                {/* commponetent de catigory de formage */}
                <Categories className="bg-slate-500"/>
                {/* commponte vde les typs de formage */ }
                <View className="mt-5" >
                    {
                        [featured,featured,featured].map((item,index)=>{
                            return(
                               <FeaturedRow
                               key={index}
                              title={item.title}
                               Fromagerie={item.Fromagerie}
                               description={item.description}
                               
                               
                               /> 
                            )
                        })
                    }
                </View>
              </ScrollView>
              
              </View>
              <View style={styles.container}>

<Line color="red" thickness={2} style={{ marginVertical: 10 }} />

</View>
    </SafeAreaView>

  )
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
