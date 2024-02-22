import { styled } from "nativewind";
import React from "react";
import { Image, Text, View } from "react-native";

const StyledView = styled(View);
const StyledImage = styled(Image);
export default function Homepage() {
  return (
    <StyledView className="bg-[rgb(30,30,30)] w-full h-full">
      <StyledImage source={require("../assets/logo.png")}></StyledImage>
      <Text>hello</Text>
    </StyledView>
  );
}
