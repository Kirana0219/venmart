import { Color, Tabs } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

const TabsLayout = () => {
    return(
        <Tabs>
            <Tabs.Screen
                name="home"
                options={
                    {
                        title: 'Home',
                        tabBarIcon: ({color}) => <Lucide name="home" size={24} color={color}/>,
                    }
                }/>
            <Tabs.Screen
                name="news"
                options={
                    {
                        title: 'News',
                        tabBarIcon: ({color}) => <Lucide name="newspaper" size={24} color={color}/>
                    }
                }/>
            <Tabs.Screen
                name="activity"
                options={
                    {
                        title: 'Activity',
                        tabBarIcon: ({color}) => <Lucide name="clipboard-list" size={24} color={color}/>
                    }
                }/>
            <Tabs.Screen
                name="profile"
                options={
                    {
                        title: 'Profile',
                        tabBarIcon: ({color}) => <Lucide name="user" size={24} color={color}/>
                    }
                }/>
        </Tabs>
    );
}

export default TabsLayout;