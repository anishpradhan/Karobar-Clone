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

export default function LanguageSelectionScreen() {
  // const [refreshing, setRefreshing] = React.useState(false);
  // const [text, onChangeText] = React.useState("");

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  const [languageChosen, setLanguageChosen] = useState("Nepali");
  const onClickHandler = (lang: string) => {
    setLanguageChosen(lang);
  };

  const SelectLanguageText = () => (
    <View className="flex-col space-y-3 py-4">
      <Text className="text-xl font-semibold">Select Language</Text>
      <Text className="text-sm font-medium text-gray-500">
        You can change it later from settings
      </Text>
    </View>
  );

  const LanguageSelector = () => (
    <View className="flex flex-row space-x-3 w-full mt-6">
      <TouchableOpacity
        className={`grow h-40 flex justify-center items-center rounded-lg border-[2px] relative ${
          languageChosen === "Nepali" ? "border-[#4F9C56]" : "border-gray-300 "
        }`}
        onPress={() => onClickHandler("Nepali")}
      >
        <View className="flex-col justify-center items-center space-y-2">
          <Image
            source={require("@/assets/images/Nepal.png")}
            style={{ resizeMode: "stretch", width: 30, height: 35 }}
          />
          <Text className="text-lg font-semibold">नेपाली</Text>
        </View>
        {languageChosen === "Nepali" && (
          <View className="absolute right-[-10] top-[-12]">
            <Image source={require("@/assets/images/Check.png")} />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        className={`grow h-40 flex justify-center items-center rounded-lg border-[2px] relative ${
          languageChosen === "English" ? "border-[#4F9C56]" : "border-gray-300 "
        }`}
        onPress={() => onClickHandler("English")}
      >
        <View className="flex-col justify-center items-center space-y-2">
          <Image
            source={require("@/assets/images/USA.png")}
            style={{ resizeMode: "stretch", width: 50, height: 35 }}
          />
          <Text className="text-lg font-semibold">English</Text>
        </View>
        {languageChosen === "English" && (
          <View className="absolute right-[-10] top-[-12] ">
            <Image source={require("@/assets/images/Check.png")} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView className={`flex-1 ${Platform.OS === 'android' && 'pb-6'}`}>
      <Logo />
      <View className="h-full p-4 flex flex-col justify-between">
        <View className="mt-10">
          <SelectLanguageText />
          <LanguageSelector />
        </View>
        <Button
          Title={"Continue"}
          // navigation={navigation}
          navigateTo={"/signin/login"}
        />
      </View>

      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        //   className="flex-1"
      >
          <ScrollView
            //   className="bg-yellow-400"
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View className="flex-1 bg-gray-400">
              <View className="w-full p-3 flex-row items-center bg-white mb-2">
                <TouchableOpacity className="w-12 h-12 rounded-full bg-pink-300"></TouchableOpacity>
                <TextInput
                  className=" w-64 p-4"
                  placeholder="What's on your mind"
                  value={text}
                  onChangeText={onChangeText}
                ></TextInput>
                {text.length > 0 && (
                  <TouchableOpacity onPress={() => onChangeText("")}>
                    <Ionicons name="close" size={24} color={"grey"} />
                  </TouchableOpacity>
                )}
              </View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
              <View className="p-2 bg-white w-full h-56 mb-2"></View>
            </View>
          </ScrollView>
      </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}
