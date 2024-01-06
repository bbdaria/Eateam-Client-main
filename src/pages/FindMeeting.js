import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextComponent,
} from "react-native";
import Slider from "@react-native-community/slider";
import { SelectList } from "react-native-dropdown-select-list";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import Wave from "./../../assets/images/wave.svg";
import { useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import LocationPicker from "../components/LocationPicker";

export default function FindMeeting() {
  const [peopleNum, setPeopleNum] = useState(2);
  const [walkingTime, setWalkingTime] = useState(5);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const width = 200;
  const height = 300;
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 8; //Very high zoom level
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const userCoords = {
    latitude: 1000,
    longitude: 1000,
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#132043" }}>
      <Wave style={{ position: "absolute", zIndex: 0 }} />
      <View style={styles.title}>
        <Text style={styles.titleWord}>Let's</Text>
        <Text style={styles.titleWord}>Find</Text>
        <Text style={styles.titleWord}>Somone</Text>
        <Text style={styles.titleWord}>To Eat With</Text>
      </View>

      {showDatePicker && (
        <RNDateTimePicker
          value={selectedDate}
          mode="date"
          onChange={(event, date) => {
            if (date) {
              setSelectedDate(date);
              setShowDatePicker(false);
            }
          }}
        />
      )}
      {showTimePicker && (
        <RNDateTimePicker
          value={selectedTime}
          mode="time"
          onChange={(event, date) => {
            if (date) {
              setSelectedTime(date);
              setShowTimePicker(false);
            }
          }}
        />
      )}

      <Modal
        animationType="slide"
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
        visible={showLocationPicker}
      >
        <LocationPicker
          style={{ flex: 1, flexDirection: "column" }}
          setVisibility={setShowLocationPicker}
        />
      </Modal>

      <View style={styles.formFindMatch}>
        <Text style={styles.txtParticipantsNumber}>
          Participants Number:{" "}
          <Text style={{ color: "#FFE000" }}>{peopleNum}</Text>
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={2}
          step={1}
          value={peopleNum}
          onValueChange={setPeopleNum}
          maximumValue={5}
          minimumTrackTintColor="#FFE000"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFE000"
        />
        <View style={styles.btnsContainer}>
          <TouchableOpacity
            style={styles.btnPicker}
            onPress={() => setShowLocationPicker(true)}
          >
            <Text style={styles.btnPickerTxt}>Place</Text>

            <Entypo name="location" style={{ marginTop: 2 }} size={17} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnPicker}
            onPress={setShowDatePicker}
          >
            <Text style={styles.btnPickerTxt}>Date</Text>
            <Fontisto name="date" style={{ marginTop: 2 }} size={17} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnPicker}
            onPress={setShowTimePicker}
          >
            <Text style={styles.btnPickerTxt}>Time</Text>
            <AntDesign
              name={"clockcircleo"}
              style={{ marginTop: 3 }}
              size={17}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.dateTimeRow}>
          <Text style={styles.timeTxt}>
            {selectedTime.toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
          <Text style={styles.dateTxt}>
            {selectedDate.toLocaleString().split(",")[0]}
          </Text>
        </View>
        <TouchableOpacity style={styles.btnSearch}>
          <Text style={styles.btnSearchText}>Let's Go</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          zIndex: -1,
          top: 445,
          padding: "100%",
          backgroundColor: "#351c75ff",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    marginTop: "30%",
    marginRight: "15%",
  },
  titleWord: {
    fontSize: 45,
    color: "white",
    letterSpacing: 2,
    textShadowColor: "#0e86d4",
    textShadowRadius: 10,
    fontWeight: "bold",
  },
  formFindMatch: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    marginVertical: "5%",
    width: "66%",
  },
  txtParticipantsNumber: {
    fontSize: 20,
    color: "white",
    letterSpacing: 2,
    textShadowColor: "#0e86d4",
    textShadowRadius: 10,
    fontWeight: "bold",
    marginTop: "22%",
  },

  btnsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%",
    marginBottom: 0,
    alignItems: "flex-start",
  },
  btnPicker: {
    marginHorizontal: "2%",
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#00c9d0",

    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
    elevation: 16,
    borderWidth: 1,
  },
  btnPickerTxt: {
    fontSize: 18,
    color: "black",
    marginRight: 5,
    fontWeight: "bold",
  },
  dateTxt: {
    fontSize: 30,
    borderRightWidth: 1,
    paddingRight: 20,
    color: "white",
    borderColor: "white",
    marginRight: 5,
    fontWeight: "bold",
    textShadowRadius: 7,
    textShadowColor: "black",
  },
  timeTxt: {
    fontSize: 30,
    paddingLeft: 20,
    color: "#FFE000",
    marginRight: 5,
    fontWeight: "bold",
    textShadowRadius: 7,
    textShadowColor: "black",
  },
  dateTimeRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },

  formContatiner: {
    flex: 6,
    alignItems: "center",
  },
  btnSearch: {
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
    marginBottom: "25%",
  },
  btnSearchText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
