import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AndroidLarge4 = () => {
  return (
    <View style={styles.androidLarge5}>
      <View style={styles.androidLarge5Child} />
      <Text style={[styles.designer, styles.emailTypo]}>Designer</Text>
      <Image
        style={[styles.leftArrowIcon, styles.leftArrowIconPosition]}
        contentFit="cover"
        source={require("../assets/left-arrow.png")}
      />
      <Image
        style={[styles.nancy2Icon, styles.emailPosition]}
        contentFit="cover"
        source={require("../assets/nancy-2.png")}
      />
      <View style={[styles.androidLarge5Item, styles.leftArrowIconPosition]} />
      <Text style={[styles.socialMedia, styles.emailPosition]}>
        Social_media:
      </Text>
      <Text style={[styles.profession, styles.emailPosition]}>
        Profession: ______
      </Text>
      <Text style={[styles.contactInfo, styles.emailPosition]}>
        CONTACT INFO:
      </Text>
      <Text style={[styles.email, styles.emailPosition]}>{`email: `}</Text>
      <Text style={[styles.website, styles.emailPosition]}>
        Website:_______
      </Text>
      <Text style={[styles.nancyTyagi, styles.emailTypo]}>{`Nancy
Tyagi`}</Text>
      <Text style={[styles.featuredLooks, styles.emailTypo]}>
        Featured Looks...
      </Text>
      <Image
        style={[styles.images21, styles.imagesPosition]}
        contentFit="cover"
        source={require("../assets/images-2-1.png")}
      />
      <Image
        style={[styles.images31, styles.imagesPosition]}
        contentFit="cover"
        source={require("../assets/images-3-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
  },
  leftArrowIconPosition: {
    left: 10,
    position: "absolute",
  },
  emailPosition: {
    left: 31,
    position: "absolute",
  },
  imagesPosition: {
    height: 203,
    top: 584,
    position: "absolute",
  },
  androidLarge5Child: {
    top: 0,
    left: 0,
    width: 360,
    height: 69,
    backgroundColor: Color.colorThistle_100,
    position: "absolute",
  },
  designer: {
    top: 22,
    left: 130,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    position: "absolute",
  },
  leftArrowIcon: {
    top: 9,
    width: 42,
    height: 60,
  },
  nancy2Icon: {
    top: 100,
    width: 297,
    height: 193,
  },
  androidLarge5Item: {
    top: 322,
    width: 318,
    height: 196,
    backgroundColor: Color.colorThistle_100,
  },
  socialMedia: {
    top: 434,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  profession: {
    top: 324,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  contactInfo: {
    top: 366,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  email: {
    top: 400,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  website: {
    top: 468,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    fontSize: FontSize.size_5xl,
  },
  nancyTyagi: {
    top: 326,
    left: 226,
    fontSize: 36,
    position: "absolute",
  },
  featuredLooks: {
    top: 540,
    left: 23,
    width: 171,
    height: 44,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.jockeyOneRegular,
    position: "absolute",
  },
  images21: {
    left: 37,
    width: 122,
  },
  images31: {
    left: 194,
    width: 134,
  },
  androidLarge5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge4;
