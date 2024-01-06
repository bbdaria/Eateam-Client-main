import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";

import { Path, Svg } from "react-native-svg";

export default function RegisterForm() {
  // gender value use state for dropdown list
  const [gender, setGender] = useState("");

  // defing the gender options in a js object fot the dorpdown list
  const gendersOptions = [
    {
      key: 1,
      value: "Male",
    },
    {
      key: 2,
      value: "Female",
    },
    {
      key: 3,
      value: "Other",
    },
  ];

  return (
    <View style={styles.formContatiner}>
      <View style={styles.inputcontainer}>
        <View style={styles.inputRow}>
          <TextInput style={styles.inputBox} placeholder="Fullname " />
          <FontAwesomeIcon
            name="user"
            style={{ marginTop: 3 }}
            size={20}
            color={"#ABB0B8"}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputBox}
            placeholder="Institute Email Address"
          />
          <Ionicons
            name="mail"
            style={{ marginTop: 3 }}
            size={20}
            color={"#ABB0B8"}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputBox}
            placeholder="Phone Number"
            maxLength={10} // Limit the input to 10 digits
            keyboardType="numeric"
          />
          <FontAwesomeIcon
            name="phone"
            style={{ marginTop: 3 }}
            size={20}
            maxLength={10} // Limit the input to 10 characters (dd/mm/yyyy)
            color={"#ABB0B8"}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput style={styles.inputBox} placeholder="Faculty " />
          <FontAwesomeIcon
            name="book"
            style={{ marginTop: 3 }}
            size={20}
            color={"#ABB0B8"}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.inputBox}
            placeholder="Date of Birth (dd/mm/yy)"
            maxLength={10} // Limit the input to 8 characters (dd/mm/yyyy)
          />
          <Fontisto
            name="date"
            style={{ marginTop: 3 }}
            size={20}
            color={"#ABB0B8"}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput style={styles.inputBox} placeholder="Password " />
          <FontAwesomeIcon
            name="key"
            style={{ marginTop: 3 }}
            size={20}
            color={"#ABB0B8"}
          />
        </View>

        <SelectList
          boxStyles={styles.genderDropdown}
          dropdownStyles={{
            backgroundColor: "#e8f4f8",
            borderColor: "black",
            flexDirection: "row",

            borderWidth: 1,
            borderRadius: 6,
            width: "70%",
            justifyContent: "flex-end",

            elevation: Platform.OS === "android" ? 999 : 0,
          }}
          dropdownItemStyles={{ elevation: 50 }}
          placeholderStyle={{ fontSize: 16, color: "blue" }}
          selectedTextStyle={{ fontSize: 16 }}
          data={gendersOptions}
          labelField="value"
          valueField="key"
          placeholder="Select Gender"
          value={gender}
          search={false}
          maxHeight={120}
          setSelected={setGender}
          renderLeftIcon={() => (
            <Ionicons
              style={styles.icon}
              color={"black"}
              name="male-female"
              size={25}
            />
          )}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity>
          <Text
            style={{
              color: "#5cc9f5",
              fontSize: 16,
              marginLeft: "12%",
              fontWeight: "600",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            marginLeft: "2%",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Already have an acount?
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
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
  genderDropdown: {
    position: "relative",
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    width: "70%",
    justifyContent: "flex-end",
  },

  inputRow: {
    marginBottom: 8,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 6,
    width: "70%",
    justifyContent: "flex-end",
  },
  inputBox: {
    marginEnd: 5,
  },
  btn: {
    margin: 40,
    width: "25%",

    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF9130",
    shadowColor: "black",
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 16,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
