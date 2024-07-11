import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge2 = () => {
  return (
    <View style={styles.androidLarge3}>
      <View style={styles.androidLarge3Child} />
      <View style={[styles.androidLarge3Item, styles.alia12IconPosition]} />
      <View style={styles.androidLarge3Inner} />
      <Image
        style={styles.leftArrowIcon}
        contentFit="cover"
        source={require("../assets/left-arrow.png")}
      />
      <Image
        style={[styles.alia12Icon, styles.alia12IconPosition]}
        contentFit="cover"
        source={require("../assets/alia1-2.png")}
      />
      <Text style={[styles.findOnMyntra, styles.trendingTypo]}>
        Find On Myntra
      </Text>
      <Text style={[styles.lookOnYour, styles.trendingTypo]}>
        Look on Your Avatar
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text
        style={[styles.askDesignerTo, styles.rectangleViewPosition]}
      >{`Ask Designer to 
Recreate`}</Text>
      <Text style={[styles.trending, styles.trendingTypo]}>Trending</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alia12IconPosition: {
    left: 37,
    position: "absolute",
  },
  trendingTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  rectangleViewPosition: {
    top: 695,
    position: "absolute",
  },
  androidLarge3Child: {
    top: 574,
    left: 178,
    backgroundColor: "rgba(246, 216, 240, 0.85)",
    width: 126,
    height: 100,
    position: "absolute",
  },
  androidLarge3Item: {
    top: 576,
    width: 121,
    height: 98,
    backgroundColor: Color.colorThistle_100,
  },
  androidLarge3Inner: {
    top: 0,
    left: 0,
    width: 360,
    height: 69,
    backgroundColor: Color.colorThistle_100,
    position: "absolute",
  },
  leftArrowIcon: {
    top: 9,
    left: 10,
    width: 42,
    height: 60,
    position: "absolute",
  },
  alia12Icon: {
    top: 93,
    width: 267,
    height: 454,
  },
  findOnMyntra: {
    width: 127,
    height: 58,
    left: 31,
    top: 585,
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  lookOnYour: {
    left: 180,
    width: 124,
    height: 29,
    top: 585,
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  rectangleView: {
    width: 273,
    height: 68,
    left: 31,
    backgroundColor: Color.colorThistle_100,
  },
  askDesignerTo: {
    left: 108,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  trending: {
    top: 21,
    left: 140,
    position: "absolute",
  },
  androidLarge3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge2;
