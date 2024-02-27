import React from "react";
import { Text, TouchableOpacity, Platform } from "react-native";
import { Link, router ,useRouter } from "expo-router";


export default function Button({ Title, navigateTo }: {Title: string, navigateTo: any}) {
  const router = useRouter()
  return (

    <TouchableOpacity
      className="w-full bg-[#4F9C56] p-3 flex justify-center items-center rounded-lg"
      onPress={() => navigateTo.length && router.push(navigateTo)}
      activeOpacity={0.9}
    >
      <Text className="font-regular text-[17px] text-white">{Title}</Text>
    </TouchableOpacity>
   
)}
