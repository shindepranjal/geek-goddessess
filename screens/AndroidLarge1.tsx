import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge1 = () => {
  return (
    <View style={styles.androidLarge2}>
      <View style={styles.androidLarge2Child} />
      <Text style={[styles.influencerProfile, styles.looksTypo]}>
        Influencer Profile
      </Text>
      <Image
        style={styles.aliaBhat1}
        contentFit="cover"
        source={require("../assets/alia-bhat-1.png")}
      />
      <Text style={[styles.aliaBhat, styles.looksTypo]}>Alia Bhat</Text>

      
      {/* <Image
        style={styles.leftArrowIcon}
        contentFit="cover"
        source={require("../assets/left-arrow.png")}
      /> */}
      <Text style={[styles.trendingLooks, styles.looksTypo]}>
        Trending Looks..
      </Text>
      <Image
        style={[styles.alia11Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/alia1-1.png")}
      />
      <Image
        style={[styles.alia21Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/alia2-1.png")}
      />
      <Image
        style={[styles.alia31Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/alia3-1.png")}
      />
      <Text style={[styles.futureLooks, styles.looksTypo]}>Future Looks..</Text>
      <View style={[styles.androidLarge2Item, styles.androidLayout]} />
      <View style={[styles.androidLarge2Inner, styles.androidLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  looksTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  iconPosition: {
    height: 205,
    top: 386,
    position: "absolute",
  },
  androidLayout: {
    height: 129,
    width: 121,
    top: 651,
    backgroundColor: Color.colorThistle_100,
    position: "absolute",
  },
  androidLarge2Child: {
    top: 0,
    width: 360,
    height: 69,
    backgroundColor: Color.colorThistle_100,
    left: 0,
    position: "absolute",
  },
  influencerProfile: {
    top: 22,
    left: 88,
  },
  aliaBhat1: {
    top: 87,
    left: 42,
    width: 275,
    height: 183,
    position: "absolute",
  },
  aliaBhat: {
    top: 289,
    left: 85,
    width: 156,
    height: 59,
  },
  leftArrowIcon: {
    top: 9,
    width: 42,
    height: 60,
    left: 10,
    position: "absolute",
  },
  trendingLooks: {
    top: 330,
    left: 4,
    width: 162,
    height: 37,
  },
  alia11Icon: {
    width: 123,
    left: 10,
  },
  alia21Icon: {
    left: 143,
    width: 98,
  },
  alia31Icon: {
    left: 251,
    width: 94,
  },
  futureLooks: {
    top: 612,
    width: 166,
    height: 32,
    left: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  androidLarge2Item: {
    left: 31,
  },
  androidLarge2Inner: {
    left: 192,
  },
  androidLarge2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge1;
