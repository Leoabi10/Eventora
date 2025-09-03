import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const User = () => {
    const [tab, setTab] = useState<'Description' | 'Address'>('Description');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../../Assets/Private_party.jpg")} style={styles.headerImage} />
                <Text style={styles.titleText}>Private party</Text>
                <View style={styles.dateTimeContainer}><Text style={styles.dateTimeText}>Date: 02/Sep</Text><Text style={styles.dateTimeText}>Time: 05:00PM</Text></View>
            </View>
            <View>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "70%", marginBottom: 20, marginTop: 20 }}>
                        <Tab label="Description" active={tab === 'Description'} onPress={() => setTab("Description")} />
                        <Tab label="Address" active={tab === 'Address'} onPress={() => setTab("Address")} />
                    </View>
                </View>
                {tab === "Description" && (
                    <>
                        <Text style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            The primary purpose of using lorem ipsum in React Native development is to:
                            Visualize UI layouts:
                            See how content will flow and fit within the designed components without waiting for real data.
                            Test styling and responsiveness:
                            Ensure that text truncation, line breaks, and other styling elements behave as expected across different screen sizes and orientations.
                            Facilitate parallel development:
                            Allow frontend development to proceed independently while backend APIs or content creation are still in progress.
                            Should you find this library beneficial, kindly contemplate the option of sponsoring. Our envisioned endeavors encompass the restructuring of the repository into a monorepo architecture. This transition will empower independent versioning of icon sets, enhance performance, reduce bundle size, and simplify community contributions. Your sponsorship plays a pivotal role in materializing these advancements.
                        </Text>
                        <Image source={require("../../../Assets/design_img.png")} style={{ width: "100%", height: 200, alignItems: "center", justifyContent: "center" }} />
                    </>
                )}
                {tab === "Address" && (
                    <>  
                        <View style={{gap: 10}}>
                            <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#b50427" }}>Short and sweet
                            </Text>
                            <Text style={{ textAlign: "center", fontWeight: "bold", }}>Short and sweet is located at T. Kodimangalam,</Text>
                            <Text style={{ textAlign: "center", fontWeight: "bold", }}>Thirumal Puram Post, Madurai, Tamil Nadu 625014</Text>
                        </View>
                    </>
                )}
            </View>
        </View>
    )
}

interface TabProps {
    label: string;
    onPress: () => void;
    active?: boolean;
}

const Tab: React.FC<TabProps> = ({ label, onPress, active = false }) => {
    return (
        <TouchableOpacity
            style={{
                opacity: active ? 1 : 0.5,
                backgroundColor: "#345cc2",
                borderRadius: 5,
                padding: 10
            }}
            onPress={onPress}>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: 'transparent',
                    width: 85,
                    height: 33,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 14,
                        textAlign: 'center',
                        fontFamily: 'roboto',
                        color: 'white',
                        fontWeight: '700',
                    }}>
                    {label}
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: "35%",
        alignItems: "center",
        gap: 13
    },
    headerImage:
    {
        width: "100%",
        height: "60%"
    },
    titleText:
    {
        fontSize: 35,
        color: '#b50427',
        fontWeight: "bold"
    },
    dateTimeContainer:
    {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    dateTimeText: {
        fontSize: 15,
        fontWeight: 600,
        backgroundColor: "#d9c7b6",
        borderRadius: 6,
        padding: 10
    }
});