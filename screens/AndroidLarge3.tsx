import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const AndroidLarge3 = () => {
  return (
    <View style={styles.androidLarge4}>
      <View style={styles.androidLarge4Child} />
      <Text style={[styles.designersMarketplace, styles.nancyTyagiTypo]}>
        Designer’s Marketplace
      </Text>
      <Image
        style={styles.leftArrowIcon}
        contentFit="cover"
        source={require("../assets/left-arrow.png")}
      />
      <Image
        style={styles.nancy1Icon}
        contentFit="cover"
        source={require("../assets/nancy-1.png")}
      />
      <View style={[styles.androidLarge4Item, styles.androidLayout]} />
      <View style={[styles.androidLarge4Inner, styles.androidLayout]} />
      <View style={[styles.rectangleView, styles.androidLayout]} />
      <View style={[styles.androidLarge4Child1, styles.androidLayout]} />
      <View style={[styles.androidLarge4Child2, styles.androidChildLayout]} />
      <View style={[styles.androidLarge4Child3, styles.androidChildLayout]} />
      <View style={[styles.androidLarge4Child4, styles.androidChildLayout]} />
      <Text style={[styles.nancyTyagi, styles.nancyTyagiTypo]}>
        Nancy Tyagi
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nancyTyagiTypo: {
    textAlign: "center",
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  androidLayout: {
    width: 157,
    left: 191,
    height: 175,
    backgroundColor: Color.colorThistle_100,
    position: "absolute",
  },
  androidChildLayout: {
    height: 171,
    width: 170,
    left: 10,
    backgroundColor: Color.colorThistle_100,
    position: "absolute",
  },
  androidLarge4Child: {
    top: 0,
    left: 0,
    width: 360,
    height: 69,
    backgroundColor: Color.colorThistle_100,
    position: "absolute",
  },
  designersMarketplace: {
    top: 22,
    left: 68,
    color: Color.colorBlack,
  },
  leftArrowIcon: {
    top: 9,
    width: 42,
    height: 60,
    left: 10,
    position: "absolute",
  },
  nancy1Icon: {
    height: 175,
    width: 170,
    top: 103,
    left: 10,
    position: "absolute",
  },
  androidLarge4Item: {
    top: 103,
    left: 191,
  },
  androidLarge4Inner: {
    top: 295,
  },
  rectangleView: {
    top: 491,
  },
  androidLarge4Child1: {
    top: 687,
  },
  androidLarge4Child2: {
    top: 295,
  },
  androidLarge4Child3: {
    top: 491,
  },
  androidLarge4Child4: {
    top: 687,
  },
  nancyTyagi: {
    top: 211,
    left: 30,
    color: Color.colorWhite,
    width: 130,
    height: 46,
  },
  androidLarge4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge3;
