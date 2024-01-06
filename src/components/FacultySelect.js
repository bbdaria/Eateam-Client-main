import { SelectList } from "react-native-dropdown-select-list";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function FacultySelect() {
  const [faculty, setFaculty] = useState("");

  const faculties = [
    {
      key: 1,
      value: "Aerospace Engineering",
    },
    {
      key: 2,
      value: "Architecture and Town Planning",
    },
    {
      key: 3,
      value: "Biology",
    },
    {
      key: 4,
      value: "Biomedical Engineering",
    },
    {
      key: 5,
      value: "Biotechnology and Food Engineering",
    },

    { key: 6, value: "Chemical Engineering" },
    { key: 7, value: "Chemistry" },
    { key: 8, value: "Civil and Environmental Engineering" },
    {
      key: 9,
      value: "Computer Science",
    },
    {
      key: 10,
      value: "Education in Science and Technology",
    },
    {
      key: 11,
      value: "Electrical & Computer Engineering",
    },
    { key: 12, value: "Data and Decision Sciences" },
    {
      key: 13,
      value: "Materials Science & Engineering",
    },
    {
      key: 14,
      value: "Mathematics",
    },
    { key: 15, value: "Mechanical Engineering" },
    {
      key: 16,
      value: "Medicine",
    },
    { key: 17, value: "Physics" },
    { key: 18, value: "Humanities and Arts" },
  ];
  return (
    <View style={styles.formContatiner}>
      <SelectList
        boxStyles={styles.facultyDropdown}
        dropdownStyles={{
          backgroundColor: "#e8f4f8",
          borderColor: "black",
          flexDirection: "row-reverse",

          borderWidth: 1,
          borderRadius: 6,
          width: "70%",
          justifyContent: "flex-end",

          elevation: Platform.OS === "android" ? 999 : 0,
        }}
        dropdownItemStyles={{ elevation: 50 }}
        placeholderStyle={{ fontSize: 12, color: "blue" }}
        selectedTextStyle={{ fontSize: 16 }}
        data={faculties}
        labelField="value"
        valueField="key"
        maxHeight={360}
        placeholder="Choose Your Faculty"
        value={faculty}
        setSelected={setFaculty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContatiner: {
    flex: 6,
    alignItems: "center",
  },
  inputcontainer: {
    backgroundColor: "#5cc9f5",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "center",
    padding: 8,

    shadowColor: "#68bbe3",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  facultyDropdown: {
    position: "relative",
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    width: "70%",
    justifyContent: "flex-end",
  },
});
