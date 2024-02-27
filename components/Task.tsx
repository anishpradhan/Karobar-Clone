import React from "react";
import {Text, View, TouchableOpacity} from 'react-native';

export default function({text}: {text : string}){
return (
    // <View className="bg-white w-full h-24"></View>
    <View className="bg-white p-4 rounded-lg flex-row items-center justify-between mb-4">
        <View className="flex-row items-center flex-wrap">
            <TouchableOpacity className="w-5 h-5 bg-[#55BCF6] rounded-sm mr-4"></TouchableOpacity>
                <Text className="max-w-[85%]">{text}</Text>
            </View>
        <View className="w-5 h-5 rounded-full border-[#55BCFC] border-2"></View>
    </View>
)
}