import { View, Text, TouchableOpacity, StyleSheet, Modal,TouchableWithoutFeedback } from 'react-native';
import MeetingCardOwner from './MeetingCardOwner';
import React, { useState } from 'react';
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


export default function MeetingTab(props) {
  const [showMeetingCardOwner, setShowMeetingCardOwner] = useState(false);

  const handlePress = () => {
    setShowMeetingCardOwner(!showMeetingCardOwner);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress} style={styles.tabContainer}>
        <View style={styles.tabContent}>
          <Text style={styles.meetingTitle}>Meeting {props.meetingId}</Text>
          <Text style={styles.infoRegulator}>
            {`${props.location} ${props.date} ${props.time} ${props.numberPpl}`}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={showMeetingCardOwner}
        transparent={true}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={{ flex: 1, backgroundColor: "#132043" }}>
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
              <MeetingCardOwner
                ownerId={props.ownerId}
                members={props.members}
                date={props.date}
                time={props.time}
                walkingTime={props.walkingTime}
              />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: 370,
    height: 90,
    backgroundColor:  "#665de8",//"#5e44c7",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderWidth: 3,
    borderColor:"#5e44c7",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(64, 0, 102, 9)", 
  },
  tabContent: {
    flexDirection: "column",
    paddingRight: "3%",
  },
  meetingTitle: {
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 20, 
    color: "#40F8FF",
  },
  infoRegulator: {
    fontWeight: "700",
    fontSize: 17,
    color: "#0C356A",
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
