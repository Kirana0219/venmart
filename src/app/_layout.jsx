import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ffff"
                },
                headerTitleAlign: "center"
            }}
        >
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
    );
}

export default Layout;