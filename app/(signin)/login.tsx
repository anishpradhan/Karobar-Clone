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
  import Logo from "@/components/Logo";
  import Button from "@/components/Button";
  
  export default function LoginScreen() {
    const [phone, setPhone] = useState("");
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [country, setCountry] = useState("Nepal");
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        () => {
          setKeyboardVisible(true);
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        () => {
          setKeyboardVisible(false);
        }
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
  
    const phoneNumberInput = () => (
      <View className="relative">
        <Pressable
          className="z-20"
          onPress={() => setToggleDropDown((prev) => !prev)}
        >
          {country === "Nepal"
            ? countryCodeSelector(require("@/assets/images/Nepal.png"), "+977", true)
            : countryCodeSelector(require("@/assets/images/USA.png"), "+1", true)}
        </Pressable>
        <TextInput
          placeholder="9XXXXXXXXX"
          maxLength={10}
          className="w-full h-12 pl-28 pr-4 text-[16px] font-light tracking-wider z-10 border-[1px] border-green-500 rounded-lg"
          keyboardType="numeric"
          onChangeText={(newNum) => setPhone(newNum)}
          defaultValue={phone}
        />
        {toggleDropDown && listOfCountryCode()}
      </View>
    );
  
    const countryCodeSelector = (flag: any, countryCode: string, isAbsolute:boolean) => {
      return (
        <View
          className={`left-0 top-0 h-12 w-[100px] flex justify-center items-center ${
            isAbsolute && "absolute"
          }`}
        >
          <View
            className={`w-full ${
              isAbsolute && "border-r-[1.5px] border-gray-300"
            } px-2 flex-row items-center justify-evenly space-x-1`}
          >
            <Image source={flag} className="w-4 h-4 " />
            <Text className="text-[15px] font-semibold w-10 text-center">
              {countryCode}{" "}
            </Text>
            {isAbsolute && (
              <Image source={require("@/assets/images/Dropdown.png")} />
            )}
          </View>
        </View>
      );
    };
  
    const listOfCountryCode = () => {
      return (
        <View className="absolute top-[-4px] left-[-4px] bg-[#ebebeb] w-28 rounded-sm shadow-black ring-[1px] ring-gray-100 shadow-sm z-50 ">
          <Pressable
            onPress={() => {
              setCountry("Nepal");
              setToggleDropDown(false);
            }}
          >
            {countryCodeSelector(require("@/assets/images/Nepal.png"), "+977", false)}
          </Pressable>
          <Pressable
            onPress={() => {
              setCountry("USA");
              setToggleDropDown(false);
            }}
          >
            {countryCodeSelector(require("@/assets/images/USA.png"), "+1", false)}
          </Pressable>
        </View>
      );
    };
  
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={isKeyboardVisible}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 py-10"
          >
            <Logo />
            <TouchableWithoutFeedback
              onPress={() => {
                Keyboard.dismiss;
                setToggleDropDown(false)
              }}
            >
              <View className="flex flex-col space-y-8 p-6 h-full ">
                <View className=" w-full  flex justify-end items-center ">
                  <Image
                    source={require("@/assets/images/login.png")}
                  />
                  <Text className="text-2xl font-semibold tracking-wider">
                    Login with Phone
                  </Text>
                </View>
                <View className="z-10">{phoneNumberInput()}</View>
  
                <View className="z-0">
                  <Button
                    Title={"Get Login OTP"}
                    // navigation={navigation}
                    navigateTo={phone.length === 10 ? "/(signin)/otpVerification" : ''}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
          </ScrollView>
    );
  }
  