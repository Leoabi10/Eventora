import React from "react";
import { Dimensions, FlatList, Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from "react-native";
import MyComponent from "../../Components/bottomNavigation";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type RootDrawerParamList = {
    Home: undefined;
    User: undefined;
};

const Home = () => {

    const { width, height } = Dimensions.get("window");
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const users = [{ uri: require("../../../Assets/man2.jpg"), Name: "Leo", mail: "leo@gmail.com" },
    { uri: require("../../../Assets/man.jpg"), Name: "Andres", mail: "andres@gmail.com" },
    { uri: require("../../../Assets/man3.jpg"), Name: "Thiago", mail: "thiago@gmail.com" },
    { uri: require("../../../Assets/man3.jpg"), Name: "Thiago", mail: "thiago@gmail.com" },
    { uri: require("../../../Assets/man2.jpg"), Name: "Leo", mail: "leo@gmail.com" }
    ]
    const eventImage = require("../../../Assets/Event_image.jpg")
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <LinearGradient
                colors={['#000000', '#4A6CF7', '#7B2FF7']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    height: insets.top,
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "red"
                }}
            />
            <ImageBackground
                source={require("../../../Assets/Images/home's_background.png")}
                style={{
                    width: "100%",
                    height: "52%",

                }}
            >

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    paddingTop: 45,
                }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require("../../../Assets/icons/drawer_menu.png")}
                            style={{ width: 35, height: 35, left: 10 }}
                        />
                    </TouchableOpacity>


                    <View style={{ alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                            <Text style={{ color: "white", fontSize: 15, opacity: 0.7 }}>
                                Current Location
                            </Text>
                            <TouchableOpacity>
                                <Icon name="chevron-down" size={13} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: "white", fontSize: 13 }}>
                            India, Tamil Nadu
                        </Text>
                    </View>


                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{right: 15, top: 6}}>
                        <Icon name="bell" size={23} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View>

                </View>
            </ImageBackground>

        </View>
    )
}

export default Home;