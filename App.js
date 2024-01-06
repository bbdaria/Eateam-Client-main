import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/pages/Register";
import Login from "./src/pages/Login";
import ChooseFaculty from "./src/pages/ChooseFaculty";
import FindMeeting from "./src/pages/FindMeeting";
import LocationPicker from "./src/components/LocationPicker";
import AvailableMeetings from "./src/pages/AvailableMeetings";
import MeetingCard from "./src/components/MeetingCard";
import MeetingCardOwner from "./src/components/MeetingCardOwner";
import MyMeetings from "./src/pages/MyMeetings";
import AnimTab from "./src/components/AnimTab";

export default function App() {
  const members = [
    { facultyId: 1, id: 1, name: "John", age: 18 },
    { facultyId: 5, id: 2, name: "Alice", age: 20 },
    { facultyId: 17, id: 3, name: "Bob", age: 19 },
    { facultyId: 15, id: 4, name: "Eva", age: 22 },
    { facultyId: 13, id: 5, name: "David", age: 19 },
  ];
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <AnimTab />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
