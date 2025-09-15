import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '@/components/CustomDrawer';
import { Image, TouchableOpacity } from 'react-native';
// import { navigation } from "@react-navigation/native";

export default function Layout() {
    // const navigation = useNavigation()
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer drawerContent={(props: any) => <CustomDrawer {...props} />} screenOptions={({ navigation }) => ({
                headerShown: true,
                headerTitle: "ANISH PRADHAN",
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: '#4F9C56',
                },
                headerTitleStyle: {

                },
                drawerStyle: { width: '80%' },
                headerLeftContainerStyle: { paddingHorizontal: 15 },
                headerRightContainerStyle: { paddingHorizontal: 20 },
                headerTintColor: 'white',
                headerLeft: (() => <TouchableOpacity className='flex justify-center items-center p-3 rounded-full' onPress={navigation.toggleDrawer}><Image source={require('@/assets/images/SideBarLine.png')} /></TouchableOpacity>),
                headerRight: (() => <TouchableOpacity onPress={() => { }}><Image source={require('@/assets/images/Refresh.png')} /></TouchableOpacity>),
                drawerType: 'front',


            })} />
                {/* <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',    
                    }}
                    
                /> */}
                {/* <Drawer.Screen
                    name="/incomeExpense" // This is the name of the page and must match the url from root
                    options={{
                        // drawerLabel: 'Income Expense',
                        title: 'Income Expense',
                        headerTitle: 'Income Expenses',
                    }}
                    
                /> */}
        </GestureHandlerRootView>
    );
}
