import { StyleSheet, Text, View } from "react-native";
import ManFaceless from "./../../assets/images/manFaceless.svg";
import { useEffect } from "react";

export default function MemberCardOwner(props) {
  useEffect(() => console.log("called Owner"));
  const faculties = [
    "Aerospace Eng",
    "Architecture",
    "Biology",
    "Biomed Eng",
    "Biotech & Food Eng",
    "Chemical Eng",
    "Chemistry",
    "Civil & Env Eng",
    "Computer Science",
    "Edu in Sci & Tech",
    "Elec & Computer Eng",
    "Data & Decision Sci",
    "Materials Sci & Eng",
    "Mathematics",
    "Mechanical Eng",
    "Medicine",
    "Physics",
    "Humanities & Arts",
  ];

  return (
    <View style={styles.memberContainer}>
      <Text style={styles.faculty}>{faculties[props.facultyId]}</Text>

      <Text style={styles.nameAge}>
        {props.name}, {props.age}
      </Text>

      <View style={styles.profileIcon}>
        <ManFaceless />
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  memberContainer: {
    backgroundColor: "#D2DE32",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  profileIcon: {
    backgroundColor: "white",
    height: 60,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 5,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 40,
  },
  nameAge: {
    marginHorizontal: "3%",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 20,
    paddingRight: "3%",
    borderRightWidth: 1,
    borderColor: "white",
    color: "#4b4b4b",
  },

  faculty: {
    fontWeight: "700",
    fontSize: 17,
    color: "black",
  },
});
