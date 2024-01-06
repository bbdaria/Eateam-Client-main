import { StyleSheet, Text, View } from "react-native";
import ManFaceless from "./../../assets/images/manFaceless.svg";
import { useEffect } from "react";


export default function MemberCard(props) {
  useEffect(() => console.log("called regular"));
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
    <View style={style.memberContainerRegular}>
      <Text style={style.facultyRegular}>{faculties[props.facultyId]}</Text>

      <Text style={style.nameAgeRegular}>
        {props.name}, {props.age}
      </Text>

      <View style={style.profileIconRegular}>
        <ManFaceless />
      </View>
    </View>
  );
}

style = StyleSheet.create({
  memberContainerRegular: {
    backgroundColor: "#0e86d4",
    flexDirection: "row",
    justifyContent: "flex-end",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  profileIconRegular: {
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
  nameAgeRegular: {
    marginHorizontal: "3%",
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 20,
    paddingRight: "3%",
    borderRightWidth: 1,
    borderColor: "white",
    color: "#40F8FF",
  },

  facultyRegular: {
    fontWeight: "700",
    fontSize: 17,
    color: "#0C356A",
  },
});
