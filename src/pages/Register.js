import { StyleSheet, Text, View } from "react-native";

import RegisterForm from "./../../src/components/RegisterForm";
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

export default function Register() {
  return (
    <View style={{ flex: 1, backgroundColor: "#132043" }}>
      <Wave style={{ position: "absolute", zIndex: 0 }} />
      <Text style={styles.title}>
        Ea<Text style={[styles.title, { color: "#FFE000" }]}>team</Text>
      </Text>
      <PizzaIcon1 style={styles.pizzaIcon1} />
      <PizzaIcon2 style={styles.pizzaIcon2} />
      <PizzaIcon1 style={styles.pizzaIcon3} />
      <PizzaIcon1 style={styles.pizzaIcon4} />
      <PizzaIcon2 style={styles.pizzaIcon5} />
      <Burger1 style={styles.burger1} />
      <Burger2 style={styles.burger2} />
      <Burger1 style={styles.burger3} />
      <Burger2 style={styles.burger4} />
      <Burger1 style={styles.burger5} />
      <Sushi1 style={styles.Sushi1} />
      <Sushi2 style={styles.Sushi2} />
      <Sushi1 style={styles.Sushi3} />
      <Sushi2 style={styles.Sushi4} />
      <Sushi1 style={styles.Sushi5} />
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
      <Icecream2 style={styles.Icecream3} />
      <Icecream2 style={styles.Icecream4} />
      <Icecream2 style={styles.Icecream5} />
      <Icecream2 style={styles.Icecream6} />
      <Fries1 style={styles.Fries1} />
      <Fries1 style={styles.Fries2} />
      <Fries1 style={styles.Fries3} />
      <Fries2 style={styles.Fries4} />
      <Fries2 style={styles.Fries5} />
      <Fries2 style={styles.Fries6} />

      <RegisterForm />
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
  title: {
    color: "white",
    letterSpacing: 2,
    textShadowColor: "#0e86d4",
    textShadowRadius: 10,
    fontSize: 45,
    flex: 1,
    marginTop: "29%",
    marginRight: "27%",
    fontWeight: "bold",
  },

  formContatiner: {
    flex: 6,
    alignItems: "center",
  },
  pizzaIcon1: {
    position: "absolute",
    zIndex: 0,
    left: 200,
    top: 700,
  },
  pizzaIcon2: {
    position: "absolute",
    zIndex: 0,
    left: 50,
    top: 250,
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
    left: 100,
    top: 450,
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
    left: 50,
    top: 50,
  },

  burger2: {
    position: "absolute",
    zIndex: -1,
    left: 250,
    top: 150,
  },
  burger3: {
    position: "absolute",
    zIndex: 0,
    left: 100,
    top: 200,
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
  Sushi2: {
    position: "absolute",
    zIndex: 0,
    left: 340,
    top: 230,
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
    top: 440,
  },
  Sushi6: {
    position: "absolute",
    zIndex: 0,
    left: 300,
    top: 730,
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
    top: 115,
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
    left: 100,
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
    left: 334,
    top: 456,
  },
  Icecream3: {
    position: "absolute",
    zIndex: -1,
    left: 170,
    top: 236,
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
