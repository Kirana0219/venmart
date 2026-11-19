import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

const Home = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{headerShown: false}}/>
            <View>
                <Text>Ini halaman Home</Text>
            </View>
        </SafeAreaView>
    );
}

export default Home;