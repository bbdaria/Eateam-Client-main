import MemberCard from "./MemberCard";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useAnimatedValue,
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Entypo from "react-native-vector-icons/Entypo";

import MemberCardOwner from "./MemberCardOwner";
import { useEffect, useState } from "react";

export default function MeetingCardOwner(props) {
  const [ownerMember, setOwnerMember] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Find and set the owner member
    const owner = props.members.find((member) => member.id === props.ownerId);
    setOwnerMember(owner);

    // Filter and set the members excluding the owner
    const filteredMembers = props.members.filter(
      (member) => member.id !== props.ownerId
    );
    setMembers(filteredMembers);
  }, [props.members, props.ownerId]);

  // Log the updated ownerMember and members
  console.log("Owner Member:", ownerMember);
  console.log("Members:", members);

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
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Entypo name={"location"} size={37} color={"#31E1F7"} />
          </TouchableOpacity>
        </View>
        <View style={styles.detailIconBlock}>
          <FontAwesome5 name={"walking"} size={25} color={"white"} />
          <Text style={styles.dateTimeTxt}>{props.walkingTime} min</Text>
        </View>
      </View>
      <View style={styles.membersContainer}>
        {ownerMember && (
          <MemberCardOwner
            key={ownerMember.id}
            name={ownerMember.name}
            age={ownerMember.age}
            facultyId={ownerMember.facultyId}
          />
        )}

        {members.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            age={member.age}
            facultyId={member.facultyId}
          />
        ))}
      </View>
      <View style={styles.btnLeaveContainer}>
        <TouchableOpacity style={styles.btnLeave}>
          <Text style={styles.btnLeaveTxt}>Leave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timeTitle: {
    color: "#D2DE32",
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
    marginVertica: 2,
    marginHorizontal: 8,
  },
  detailIconBlock: {
    alignItems: "center",
    marginBottom: 3,
  },
  timeBlock: { alignItems: "center", marginVertical: 50 },
  btnLeave: {
    margin: 40,
    width: "25%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "red",
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
  btnLeaveTxt: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  btnLeaveContainer: {
    alignItems: "center",
  },
  dateTimeTxt: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  locationTxt: {
    color: "#98E4FF",
    fontWeight: "600",
    fontSize: 16,
  },
});
