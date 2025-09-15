import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  Pressable,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Button from "@/components/Button";
import { Stack } from "expo-router";

export default function IncomeExpenseScreen() {

  return (

    <ScrollView className="flex-1" bounces={false} invertStickyHeaders={true} showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{
        gestureEnabled: true,
        headerShown: true,
        headerTitle: 'Income Expenses',
        headerStyle: {
          backgroundColor: '#4F9C56',
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        
        

      }} />
      <View className=" w-full h-[18%] bg-[#4F9C56] justify-center items-center">
        <View className=" w-[90%] h-24 bg-white rounded-lg flex-row ">
          <View className="justify-center items-center h-full basis-1/3"><Text className="text-green-500 font-semibold">Rs. 0</Text><Text className="text-xs font-regular">Income</Text></View>
          <View className="justify-center items-center h-full basis-1/3"><Text className="text-red-500 font-semibold">Rs. 0</Text><Text className="text-xs font-regular">Expense</Text></View>
          <View className="justify-center items-center h-full basis-1/3"><Text className="text-blue-500 font-semibold">Rs. 0</Text><Text className="text-xs font-regular">Net Amount</Text></View>
        </View>
       
      </View>

      <View className="w-full px-4 py-2 space-y-3">
        <View className="w-28 rounded-sm h-8 bg-gray-300 justify-center px-3"><Text>Monthly</Text></View>
        <Text className="text-sm font-semibold">ALL INCOME AND EXPENSES</Text>
      </View>
      <ScrollView bounces={false}>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
        <View className="border-b-[1px] border-gray-300 h-24 w-full px-4 py-2 space-y-2">
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
          <Text className="">Fuel</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
