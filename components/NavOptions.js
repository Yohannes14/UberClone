import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import {FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc";
const data =[
    {
    id: '1',
    title:'Get a Ride',
    image:'https://links.papareact.com/3pn',
    screen: 'MapScreen',
    },
    {
        id: '2',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen' // change future
        }
    ];

const NavOptions = () => {
   const navigation = useNavigation();
  return (
    <FlatList
      data ={data}
      horizontal
      keyExtractor ={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress ={() => navigation.navigate(item.screen)}
        style ={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image
                 style ={{
                    width: 120,
                    height: 120,
                    resizeMode: 'contain'
                 }}
                 source={{uri: item.image}}
                 />
                 <Text style ={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name ="arrowright" color ="white" type ="antdesign" />
            </View>
        </TouchableOpacity>
      )}
     />
  )
}
export default NavOptions;
