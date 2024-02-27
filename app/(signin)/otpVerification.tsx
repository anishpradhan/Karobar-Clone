import React, { useEffect, useState, useRef } from "react";
import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState<string>('');
  const [resendTimer, setResendTimer] = useState<number>(30);
  const inputRefs = useRef<TextInput[]>(Array(6).fill(null));

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) {
      return;
    }

    const newOtp = otp.split('');
    newOtp[index] = value;

    if (index < 5 && value !== '') {
      inputRefs.current[index + 1]?.focus();
    }

    setOtp(newOtp.join(''));
  };
  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && index > 0 && otp[index] !== '') {
      inputRefs.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    if (otp.length === 6) {
      // Otp is complete, you can now verify or submit it
      // console.log('OTP:', otp);
    }
  }, [otp]);


  useEffect(() => {
    const resentTimer = setInterval(() => {
      setResendTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(resentTimer);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(resentTimer);
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 px-4 py-4 space-y-10">
        <View className="flex-col space-y-2">
          <Text className="font-semibold text-xl">OTP Code Sent</Text>
          <View className="flex-row justify-between">
            <Text className="font-regular text-base tracking-normal text-gray-400">
              +977 9817325641
            </Text>
            <Pressable onPress={() => router.back()}>
              <Text className="font-regular text-base tracking-normal text-[#5EB548]">
                Change Number
              </Text>
            </Pressable>
          </View>
        </View>
        <View className="flex-col space-y-3">
          <Text className="font-regular text-sm">Enter Code</Text>
          <View className="w-full flex-row justify-between">
         
           {Array.from({ length: 6 }, (_, index) => (
              <TextInput
                key={index}
                className="basis-12 h-12 border-[1px] border-gray-400 rounded-lg text-xl text-center flex items-center"
                ref={(ref) => (inputRefs.current[index] = ref!)}
                onChangeText={(value) => handleChange(index, value)}
                onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
                value={otp[index] || ""}
                style={{ textAlignVertical: "center" }}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
          </View>
          {resendTimer > 0 ? (
            <Text className="font-light text-sm text-gray-400">
              Resend OTP Code in {resendTimer}s
            </Text>
          ) : (
            <Pressable>
              <Text className="font-light text-sm text-[#5EB548]">
                Resend OTP Code
              </Text>
            </Pressable>
          )}
        </View>
        <View>
          <Button
            Title={"Verify Phone Number"}
            // navigation={navigation}
            navigateTo={otp.length === 6 && "/signin/selectMode"}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
