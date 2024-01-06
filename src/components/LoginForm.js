import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

// Rest of the import statements
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Path, Svg } from "react-native-svg";

export default function LoginForm() {
  return (
    <View style={styles.formContatiner}>
      <View style={styles.inputcontainer}>
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

        <View style={[styles.inputRow, { marginBottom: 0 }]}>
          <TextInput style={styles.inputBox} placeholder="Password " />
          <FontAwesomeIcon
            style={{ marginTop: 3 }}
            name="key"
            size={20}
            color={"#ABB0B8"}
          />
        </View>
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
            Register
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
          Don't have an acount?
        </Text>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContatiner: {
    flex: 5,
    alignItems: "center",
  },
  inputcontainer: {
    backgroundColor: "#5cc9f5",
    borderWidth: 2,
    borderRadius: 15,
    alignItems: "center",
    padding: 8,

    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  inputRow: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 6,
    width: "70%",
    marginBottom: 8,
    justifyContent: "flex-end",
  },
  inputBox: {
    marginEnd: 5,
  },
  btnLogin: {
    margin: 40,
    width: "25%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F99417",
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
  btnLoginText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
