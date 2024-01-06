import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import MeetingCard from "../components/MeetingCard";
import Wave from "./../../assets/images/wave.svg";
import PizzaIcon1 from "./../../assets/images/pizza1.svg";
import PizzaIcon2 from "./../../assets/images/pizza2.svg";
import Burger1 from "./../../assets/images/burger1.svg";
import Burger2 from "./../../assets/images/burger2.svg";
import Sushi1 from "./../../assets/images/sushi1.svg";
import Sushi2 from "./../../assets/images/sushi2.svg";
import Hotdog1 from "./../../assets/images/hotdog1.svg";
import Hotdog2 from "./../../assets/images/hotdog2.svg";
import Taco1 from "./../../assets/images/taco1.svg";
import Taco2 from "./../../assets/images/taco2.svg";
import Icecream1 from "./../../assets/images/icecream1";
import Icecream2 from "./../../assets/images/icecream2";
import Fries1 from "./../../assets/images/fries1.svg";
import Fries2 from "./../../assets/images/fries2.svg";
import Swiper from "react-native-swiper";
import MeetingCardOwner from "../components/MeetingCardOwner";
import MeetingTab from "../components/MeetingTab";

export default function MyMeetings() {
  const navigation = useNavigation();
  const members1 = [
    { facultyId: 1, id: 1, name: "John", age: 18 },
    { facultyId: 5, id: 2, name: "Alice", age: 20 },
    { facultyId: 17, id: 3, name: "Bob", age: 19 },
    { facultyId: 15, id: 4, name: "Eva", age: 22 },
    { facultyId: 8, id: 5, name: "Harel", age: 18 },
  ];

  const members2 = [
    { facultyId: 3, id: 1, name: "Emily", age: 25 },
    { facultyId: 4, id: 2, name: "Michael", age: 30 },
    { facultyId: 6, id: 3, name: "Sophia", age: 22 },
    { facultyId: 7, id: 4, name: "Daniel", age: 28 },
    { facultyId: 8, id: 5, name: "Harel", age: 18 },
  ];

  const members3 = [
    { facultyId: 14, id: 1, name: "Aiden", age: 22 },
    { facultyId: 13, id: 2, name: "Chloe", age: 18 },
    { facultyId: 12, id: 3, name: "Liam", age: 25 },
    { facultyId: 11, id: 4, name: "Ella", age: 30 },
    { facultyId: 8, id: 5, name: "Harel", age: 18 },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#132043" }}>
      <Wave style={{ position: "absolute", zIndex: 0 }} />
      <PizzaIcon1 style={styles.pizzaIcon1} />
      <PizzaIcon1 style={styles.pizzaIcon3} />
      <PizzaIcon1 style={styles.pizzaIcon4} />
      <PizzaIcon2 style={styles.pizzaIcon5} />
      <Burger1 style={styles.burger1} />
      <Burger2 style={styles.burger2} />
      <Burger2 style={styles.burger4} />
      <Burger1 style={styles.burger5} />
      <Sushi1 style={styles.Sushi1} />
      <Sushi1 style={styles.Sushi3} />
      <Sushi2 style={styles.Sushi4} />
      <Sushi1 style={styles.Sushi5} />
      <Hotdog1 style={styles.Hotdog1} />
      <Hotdog2 style={styles.Hotdog2} />
      <Hotdog1 style={styles.Hotdog3} />
      <Hotdog2 style={styles.Hotdog4} />
      <Hotdog1 style={styles.Hotdog5} />
      <Taco1 style={styles.Taco1} />
      <Taco2 style={styles.Taco2} />
      <Taco1 style={styles.Taco3} />
      <Taco2 style={styles.Taco4} />
      <Taco1 style={styles.Taco5} />
      <Taco2 style={styles.Taco6} />
      <Icecream1 style={styles.Icecream1} />
      <Icecream1 style={styles.Icecream2} />
      <Icecream2 style={styles.Icecream4} />
      <Icecream2 style={styles.Icecream5} />
      <Icecream2 style={styles.Icecream6} />
      <Fries1 style={styles.Fries2} />
      <Fries1 style={styles.Fries3} />
      <Fries2 style={styles.Fries4} />
      <Fries2 style={styles.Fries5} />
      <Fries2 style={styles.Fries6} />

    

      <View style={styles.myMeetingsView}>
        <Text style={styles.title}> Meetings history </Text>

        <ScrollView style = {styles.ScrollViewStyle}>
          <View key={1} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members1}
              date={"10.11.2023"}
              time={"18:30"}
              walkingTime={15}
              location={"EzrachEat"}
              numberPpl={members1.length}
              meetingId={1}
            />
          </View>

          <View key={2} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members2}
              date={"11.11.2023"}
              time={"12:30"}
              walkingTime={5}
              location={"EzrachEat"}
              numberPpl={members2.length}
              meetingId={2}
            />
          </View>

          <View key={3} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members3}
              date={"10.11.2023"}
              time={"10:00"}
              walkingTime={10}
              location={"EzrachEat"}
              numberPpl={members3.length}
              meetingId={3}
            />
          </View>
          <View key={4} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members3}
              date={"10.11.2023"}
              time={"10:00"}
              walkingTime={10}
              location={"EzrachEat"}
              numberPpl={members3.length}
              meetingId={4}
            />
          </View>
          <View key={5} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members3}
              date={"10.11.2023"}
              time={"10:00"}
              walkingTime={10}
              location={"EzrachEat"}
              numberPpl={members3.length}
              meetingId={5}
            />
          </View>
          <View key={6} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members3}
              date={"10.11.2023"}
              time={"10:00"}
              walkingTime={10}
              location={"EzrachEat"}
              numberPpl={members3.length}
              meetingId={6}
            />
          </View>
          <View key={7} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members3}
              date={"10.11.2023"}
              time={"10:00"}
              walkingTime={10}
              location={"EzrachEat"}
              numberPpl={members3.length}
              meetingId={7}
            />
          </View>
          <View key={8} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members3}
              date={"10.11.2023"}
              time={"10:00"}
              walkingTime={10}
              location={"EzrachEat"}
              numberPpl={members3.length}
              meetingId={8}
            />
          </View>
          <View key={9} style={styles.meetingTabContainer}>
            <MeetingTab
              ownerId={5}
              members={members3}
              date={"10.11.2023"}
              time={"10:00"}
              walkingTime={10}
              location={"EzrachEat"}
              numberPpl={members3.length}
              meetingId={9}
            />
          </View>
          
        </ScrollView>
      </View>

      <View
        style={{
          position: "absolute",
          zIndex: -1,
          top: 450,
          padding: "100%",
          backgroundColor: "#351c75ff",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ScrollViewStyle: {
    height: 550,
    paddingHorizontal: 30,
  },

  myMeetingsView: {
    height: 1000,
    flexDirection: "column",
    justifyContent: "flex-end",
    borderWidth: 0,
    padding: 5,
    paddingTop: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  meetingTabContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 2, 
  },
  title: {
    paddingTop:1,
    color: "white",
    letterSpacing: 2,
    textShadowColor: "#0e86d4",
    textShadowRadius: 10,
    fontSize: 45,
    flex: 1,
    marginTop: "15%",
    marginRight: "27%",
    fontWeight: "bold",
  },

  pizzaIcon1: {
    position: "absolute",
    zIndex: 0,
    left: 200,
    top: 700,
  },

  pizzaIcon3: {
    position: "absolute",
    zIndex: 0,
    left: 100,
    top: 600,
  },
  pizzaIcon4: {
    position: "absolute",
    zIndex: 0,
    left: 50,
    top: 50,
  },
  pizzaIcon5: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 500,
  },
  pizzaIcon6: {
    position: "absolute",
    zIndex: 0,
    left: 200,
    top: 100,
  },
  burger1: {
    position: "absolute",
    zIndex: 0,
    left: 100,
    top: 495,
  },

  burger2: {
    position: "absolute",
    zIndex: 0,
    left: 250,
    top: 150,
  },
  burger4: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 310,
  },
  burger5: {
    position: "absolute",
    zIndex: 0,
    left: 260,
    top: 600,
  },
  burger6: {
    position: "absolute",
    zIndex: 0,
    left: 170,
    top: 550,
  },

  Sushi1: {
    position: "absolute",
    zIndex: 0,
    left: 70,
    top: 120,
  },

  Sushi3: {
    position: "absolute",
    zIndex: 0,
    left: 40,
    top: 670,
  },
  Sushi4: {
    position: "absolute",
    zIndex: 0,
    left: 270,
    top: 70,
  },
  Sushi5: {
    position: "absolute",
    zIndex: 0,
    left: 240,
    top: 488,
  },
  Sushi6: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 730,
  },
  Hotdog1: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 730,
  },
  Hotdog1: {
    position: "absolute",
    zIndex: 0,
    left: 200,
    top: 630,
  },
  Hotdog2: {
    position: "absolute",
    zIndex: 0,
    left: 100,
    top: 320,
  },
  Hotdog3: {
    position: "absolute",
    zIndex: 0,
    left: 40,
    top: 550,
  },
  Hotdog4: {
    position: "absolute",
    zIndex: 0,
    left: 130,
    top: 130,
  },
  Hotdog5: {
    position: "absolute",
    zIndex: 0,
    left: 320,
    top: 160,
  },
  Hotdog6: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 670,
  },

  Taco1: {
    position: "absolute",
    zIndex: 0,
    left: 340,
    top: 390,
  },
  Taco2: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 470,
  },
  Taco3: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 570,
  },
  Taco4: {
    position: "absolute",
    zIndex: 0,
    left: 160,
    top: 70,
  },
  Taco5: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 670,
  },
  Taco6: {
    position: "absolute",
    zIndex: 0,
    left: 110,
    top: 255,
  },
  Icecream1: {
    position: "absolute",
    zIndex: 0,
    left: 100,
    top: 770,
  },
  Icecream1: {
    position: "absolute",
    zIndex: 0,
    left: 100,
    top: 770,
  },
  Icecream2: {
    position: "absolute",
    zIndex: 0,
    left: 345,
    top: 456,
  },

  Icecream4: {
    position: "absolute",
    zIndex: 0,
    left: 330,
    top: 90,
  },
  Icecream5: {
    position: "absolute",
    zIndex: 0,
    left: 160,
    top: 540,
  },
  Icecream6: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 770,
  },
  Fries1: {
    position: "absolute",
    zIndex: -1,
    left: 277,
    top: 230,
  },
  Fries2: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 340,
  },
  Fries3: {
    position: "absolute",
    zIndex: 0,
    left: 40,
    top: 770,
  },
  Fries4: {
    position: "absolute",
    zIndex: 0,
    left: 366,
    top: 620,
  },
  Fries5: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 170,
  },
  Fries6: {
    position: "absolute",
    zIndex: 0,
    left: 130,
    top: 670,
  },
});