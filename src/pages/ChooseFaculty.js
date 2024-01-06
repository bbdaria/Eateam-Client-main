import { StyleSheet, Text, View, Image } from "react-native";
import FacultySelect from "../components/FacultySelect";
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
import EatingIllustration from "./../../assets/images/eatingIllustration.svg";

import Wave from "./../../assets/images/wave.svg";

export default function ChooseFaculty() {
  return (
    <View style={{ flex: 1, backgroundColor: "#132043" }}>
      <Wave style={{ position: "absolute", zIndex: -2 }} />
      <Text style={styles.title}>
        Ea<Text style={[styles.title, { color: "#FFE000" }]}>team</Text>
      </Text>
      <PizzaIcon2 style={styles.pizzaIcon2} />
      <PizzaIcon1 style={styles.pizzaIcon4} />
      <Burger2 style={styles.burger2} />
      <Burger1 style={styles.burger3} />
      <Burger2 style={styles.burger4} />
      <Sushi1 style={styles.Sushi1} />
      <Sushi2 style={styles.Sushi2} />
      <Sushi2 style={styles.Sushi4} />
      <Hotdog2 style={styles.Hotdog2} />
      <Hotdog1 style={styles.Hotdog3} />
      <Hotdog2 style={styles.Hotdog4} />
      <Hotdog1 style={styles.Hotdog5} />
      <Taco1 style={styles.Taco1} />
      <Taco2 style={styles.Taco4} />
      <Taco2 style={styles.Taco6} />
      <Icecream2 style={styles.Icecream4} />
      <Fries1 style={styles.Fries1} />
      <Fries1 style={styles.Fries2} />

      <Fries2 style={styles.Fries5} />

      <EatingIllustration style={styles.EatingIllustration} />
      <FacultySelect />
      <View
        style={{
          position: "absolute",
          zIndex: -2,
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
    marginTop: "55%",
    marginRight: "27%",
    fontWeight: "bold",
  },

  formContatiner: {
    flex: 6,
    alignItems: "center",
  },
  EatingIllustration: {
    position: "absolute",
    zIndex: -1,
    left: 1,
    top: 160,
  },

  pizzaIcon2: {
    position: "absolute",
    zIndex: 0,
    left: 50,
    top: 250,
  },

  pizzaIcon4: {
    position: "absolute",
    zIndex: 0,
    left: 50,
    top: 50,
  },

  pizzaIcon6: {
    position: "absolute",
    zIndex: 0,
    left: 200,
    top: 100,
  },

  burger2: {
    position: "absolute",
    zIndex: 0,
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
  Sushi4: {
    position: "absolute",
    zIndex: 0,
    left: 270,
    top: 70,
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

  Taco4: {
    position: "absolute",
    zIndex: 0,
    left: 160,
    top: 70,
  },

  Taco6: {
    position: "absolute",
    zIndex: 0,
    left: 110,
    top: 255,
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

  Fries5: {
    position: "absolute",
    zIndex: 0,
    left: 20,
    top: 170,
  },
});
