import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    Switch,
    SafeAreaView
  } from "react-native";
  import {
    DrawerContentScrollView,
    
    DrawerItemList,
  } from "@react-navigation/drawer";

  import { useRouter } from "expo-router";
  
//   import Ionicons from "react-native-vector-icons/Ionicons";
  
export default function CustomDrawer(props: any){
    const router = useRouter()
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            marginTop: -50,
            zIndex: 10,
            height: '100%'
          }}
          scrollEnabled={false}       
        >
          
          <View className="w-full h-[22%] bg-[#4F9C56] flex justify-end px-6 py-4 space-y-0">
            <View className="w-14 h-14 bg-white rounded-full flex justify-center items-center mb-3">
                <View className="w-[95%] h-[95%] bg-gray-200 rounded-full flex justify-center items-center">
                    <Text className="text-[#5EB548] font-semibold text-xl">AP</Text>
                </View>
            </View>
            <Text className="text-white font-semibold text-base">ANISH PRADHAN</Text>
            <Text className="text-white font-regular text-sm">+977 9817325641</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <DrawerItemList {...props} />
            <TouchableOpacity className={`w-full h-12 justify-center px-4 py-2`} onPress={() => router.push('/incomeExpense')}><Text>Income Expenses</Text></TouchableOpacity>
          </View>
        </DrawerContentScrollView>
        {/* <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#ccc",
            // backgroundColor: colors.cardbackground,
          }}
        >
          <Text style={styles.preferences}>Preferences</Text>
          <View style={styles.switchTextContainer}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor="#f4f3f4"
              style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
            />
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Dark Theme
            </Text>
          </View>
        </View> */}
        {/* <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
          <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 15,
  
                  marginLeft: 5,
                }}
              >
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 15,
  
                  marginLeft: 5,
                }}
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };
  
  
