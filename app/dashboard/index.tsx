import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform,
    ScrollView, 
    RefreshControl
  } from "react-native";
  import React, { useState } from "react";
  import Logo from "@/components/Logo";
  import Button from "@/components/Button";
  
  export default function DashboardScreen() {
    // const [refreshing, setRefreshing] = React.useState(false);
    // // const [text, onChangeText] = React.useState("");
  
    // const onRefresh = React.useCallback(() => {
    //   setRefreshing(true);
    //   setTimeout(() => {
    //     setRefreshing(false);
    //   }, 2000);
    // }, []);
  
   
    return (
      <SafeAreaView className={`flex-1 ${Platform.OS === 'android' && 'pb-6'}`}>
         
        <View className="h-[40%] bg-[#4F9C56]  p-4 flex flex-col justify-between">
         
         
        </View>
      </SafeAreaView>
    );
  }
  