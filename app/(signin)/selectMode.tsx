import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform
  } from "react-native";
  import React, { useState } from "react";
  import Logo from "@/components/Logo";
  import Button from "@/components/Button";
  
  export default function ModeSelectionScreen() {

    const [modeChosen, setModeChosen] = useState<string>("Nepali");
    const onClickHandler = (lang: string) => {
      setModeChosen(lang);
    };
  
    const SelectModeText = () => (
      <View className="flex-col space-y-3 py-4">
        <Text className="text-xl font-semibold">Select Karobar Mode</Text>
        <Text className="text-sm font-medium text-gray-500">
         What is Karobar Mode? <Text className="text-green-600">Watch Video</Text>
        </Text>
      </View>
    );
  
    const ModeSelector = () => (
      <View className="flex flex-row space-x-3 w-full mt-14">
        <TouchableOpacity
          className={`grow h-40 flex justify-center items-center rounded-lg border-[2px] relative ${
            modeChosen === "Personal" ? "border-[#4F9C56]" : "border-gray-300 "
          }`}
          onPress={() => onClickHandler("Personal")}
        >
          <View className="flex-col justify-center items-center space-y-2">
            <Image
              source={require("@/assets/images/usericon.png")}
              style={{ resizeMode: "stretch", width: 30, height: 35 }}
            />
            <Text className="text-base font-semibold">Personal Khata</Text>
          </View>
       
        </TouchableOpacity>
        <TouchableOpacity
          className={`grow h-40 flex justify-center items-center rounded-lg border-[2px] relative ${
            modeChosen === "Business" ? "border-[#4F9C56]" : "border-gray-300 "
          }`}
          onPress={() => onClickHandler("Business")}
        >
          <View className="flex-col justify-center items-center space-y-2">
            <Image
              source={require("@/assets/images/Suitcase.png")}
              style={{ resizeMode: "stretch", width: 50, height: 35 }}
            />
            <Text className="text-base font-semibold">Business Khata</Text>
          </View>
         
        </TouchableOpacity>
      </View>
    );
    return (
      <SafeAreaView className={`flex-1 ${Platform.OS === 'android' && 'pb-4'}`}>
        <View className="h-full p-4 flex flex-col justify-between">
          <View className="">
            <SelectModeText />
            <ModeSelector />
            <Text className="mt-4 tracking-wide font-light text-sm">Personal Khata is optimized for tracking general recievables and payables</Text>
          </View>
          <View>
          <Button
            Title={"Continue"}
            // navigation={navigation}
            navigateTo={"/dashboard"}
          />
          <Text className="mt-2 text-center text-xs font-light">You can change Karobar Mode from settings</Text>
          </View>

        </View>
  
      </SafeAreaView>
    );
  }
  