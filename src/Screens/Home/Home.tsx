import React from "react";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import MyComponent from "../../Components/bottomNavigation";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import type { DrawerNavigationProp } from "@react-navigation/drawer";

type RootDrawerParamList = {
    Home: undefined;
    User: undefined;
  };

const Home = () => {

    const navigation = useNavigation()
    const users = [{uri: require("../../../Assets/man2.jpg"),Name: "Leo", mail: "leo@gmail.com"},
        {uri: require("../../../Assets/man.jpg"),Name: "Andres", mail: "andres@gmail.com"},
        {uri: require("../../../Assets/man3.jpg"),Name: "Thiago", mail: "thiago@gmail.com"},
        {uri: require("../../../Assets/man3.jpg"),Name: "Thiago", mail: "thiago@gmail.com"},
        {uri: require("../../../Assets/man2.jpg"),Name: "Leo", mail: "leo@gmail.com"}
    ]
    const eventImage = require("../../../Assets/Event_image.jpg")
    return(
        <View style={{flex: 1}}>
            <View style={{ height: "25%"}}>
                <ImageBackground source={eventImage} resizeMode="cover" style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "space-evenly"}}>
                    <TouchableOpacity style={{position: "absolute", left:10, top:10}} onPress={() => navigation.openDrawer()}>
                        <Icon name="bars" size={25} color="#fff" />  
                    </TouchableOpacity> 
                    <Image source={require("../../../Assets/Event_car.png")} style={{width: 150, height: 150}}/>
                    <Text style={{ color: "white", fontSize: 25, fontWeight: "bold"}}>Welcome Beauties!</Text>
                </ImageBackground>
            </View>
            <View style={{alignItems: "center", justifyContent: "center", backgroundColor: "#F0F0F0", flex: 1}}>
                <FlatList
                data={users}
                renderItem={({item, index}) => (
                    <TouchableOpacity style={{ marginTop: 15, marginBottom: 15, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", backgroundColor: "#598565", padding: 30}} key={index} onPress={() => navigation.navigate("User")}> 
                    <View>
                        <Image source={item.uri} style={{height: 120, width: 120, borderRadius: 70}}/>
                    </View>
                    <View>
                        <Text>Name : {item.Name}</Text>
                        <Text>Mail : {item.mail}</Text>
                    </View>    
                </TouchableOpacity>
                )}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                windowSize={5}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Home;