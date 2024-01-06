import MemberCard from "./MemberCard";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function MeetingCard(props) {
  return (
    <View style={styles.meetingCardContainer}>
      <View style={styles.timeBlock}>
        <Text style={styles.timeTitle}>{props.time}</Text>
      </View>
      <View style={styles.upperDetails}>
        <View style={styles.detailIconBlock}>
          <Fontisto name={"date"} size={25} color={"white"} />
          <Text style={styles.dateTimeTxt}>{props.date}</Text>
        </View>
        <View style={styles.detailIconBlock}>
          <FontAwesome5 name={"walking"} size={25} color={"white"} />
          <Text style={styles.dateTimeTxt}>{props.walkingTime} min</Text>
        </View>
      </View>
      <View style={styles.membersContainer}>
        {props.members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            age={member.age}
            facultyId={member.facultyId}
          />
        ))}
      </View>
      <View style={styles.btnJoinContainer}>
        <TouchableOpacity style={styles.btnJoin}>
          <Text style={styles.btnJoinTxt}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timeTitle: {
    color: "#FFE000",
    letterSpacing: 2,
    textShadowColor: "black",
    textShadowRadius: 2,
    fontSize: 45,
    fontWeight: "bold",
  },
  meetingCardContainer: {
    flex: 1,
    marginTop: "10%",
    padding: 5,
    width: "93%",
  },
  membersContainer: {
    justifyContent: "flex-end",
    shadowColor: "white",
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 16,
  },
  upperDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailIconBlock: {
    alignItems: "center",
    marginBottom: 3,
  },
  timeBlock: { alignItems: "center", marginVertical: 50 },
  btnJoin: {
    margin: 40,
    width: "20%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F99417",
    shadowColor: "white",
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.65,
    elevation: 5,
    borderWidth: 1,
  },
  btnJoinTxt: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  btnJoinContainer: {
    alignItems: "center",
  },
  dateTimeTxt: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});
