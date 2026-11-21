import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ffff"
                },
                headerTintColor: "#FFFF",
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
        }}
        >
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
    );
}

export default Layout;