import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

import { Link, useNavigation, useRouter } from "expo-router";



// {navigation}
const AndroidLarge = ({navigation}) => {

  const router = useRouter();
  // const navigation = useNavigation();

  return (
    <View style={styles.androidLarge1}>
      <View style={[styles.androidLarge1Child, styles.images11Position]} />
      <Image
        style={styles.images1Icon}
        contentFit="cover"
        source={require("../assets/images-1.png")}
      />
      <Image
        style={styles.chevronDownIcon}
        contentFit="cover"
        source={require("../assets/chevron-down.png")}
      />
      <Image
        style={[styles.images11, styles.images11Position]}
        contentFit="cover"
        source={require("../assets/images-1-1.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
        
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text 
        onPress={ ()=>{

          navigation.navigate("AndroidLarge1")

          // router.push("/AndroidLarge1")
        }
        }
         style={[styles.kritiSanon, styles.kritiSanonTypo]}>
          Kriti Sanon
        </Text>
        <Text style={[styles.janhaviKapoor, styles.kritiSanonTypo]}>
          Janhavi Kapoor
        </Text>
        <Text style={[styles.deepikaPadukone, styles.kritiSanonTypo]}>
          Deepika Padukone
        </Text>
      </View>

      <Image
        style={styles.metGala1}
        contentFit="cover"
        source={require("../assets/met-gala-1.png")}
      />
      <Image
        style={[styles.metgalalogo1Icon, styles.metgalalogo1IconLayout]}
        contentFit="cover"
        source={require("../assets/metgalalogo-1.png")}
      />
      <Image
        style={styles.cannes1Icon}
        contentFit="cover"
        source={require("../assets/cannes-1.png")}
      />
      <Image
        style={[styles.festivalDeCannes1, styles.metgalalogo1IconLayout]}
        contentFit="cover"
        source={require("../assets/festival-de-cannes-1.png")}
      />
      <Image
        style={styles.fashionhub1Icon}
        contentFit="cover"
        source={require("../assets/fashionhub-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  images11Position: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    width: 101,
    height: 96,
    top: 0,
    position: "absolute",
  },
  kritiSanonTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    top: 113,
    position: "absolute",
  },
  metgalalogo1IconLayout: {
    width: 110,
    position: "absolute",
  },
  androidLarge1Child: {
    backgroundColor: "rgba(247, 216, 240, 0.68)",
    height: 70,
    top: 0,
    width: 360,
  },
  images1Icon: {
    top: 22,
    left: 9,
    width: 60,
    height: 27,
    position: "absolute",
  },
  chevronDownIcon: {
    top: 18,
    left: 69,
    width: 34,
    height: 35,
    position: "absolute",
  },
  images11: {
    top: 70,
    height: 225,
  },
  groupChild: {
    height: 96,
    left: 0,
  },
  groupItem: {
    left: 101,
    height: 96,
  },
  groupInner: {
    left: 202,
    height: 96,
  },
  ellipseIcon: {
    left: 303,
    height: 96,
  },
  kritiSanon: {
    left: 17,
    width: 67,
  },
  janhaviKapoor: {
    width: 89,
    left: 101,
  },
  deepikaPadukone: {
    left: 207,
    width: 107,
  },
  ellipseParent: {
    top: 316,
    width: 404,
    height: 128,
    left: 0,
    position: "absolute",
  },
  metGala1: {
    top: 465,
    left: 1,
    width: 243,
    height: 141,
    position: "absolute",
  },
  metgalalogo1Icon: {
    top: 488,
    left: 244,
    height: 96,
  },
  cannes1Icon: {
    top: 633,
    width: 268,
    height: 150,
    left: 101,
    position: "absolute",
  },
  festivalDeCannes1: {
    top: 660,
    left: -9,
    height: 86,
  },
  fashionhub1Icon: {
    top: 214,
    left: -26,
    width: 380,
    height: 53,
    position: "absolute",
  },
  androidLarge1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge;
