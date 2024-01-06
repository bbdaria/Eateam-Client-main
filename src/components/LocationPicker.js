import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
  Modal,
  TouchableOpacity,
  TextComponent,
} from "react-native";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

export default function LocationPicker(props) {
  const [coordinates, setCoordinates] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState("hello");

  eventSaveLocation = () => {
    // close the map compnent and save the result of the coordinates
    props.setVisibility(false);
  };

  eventSearch = () => {
    // WARNING: For GET requests, body is set to null by browsers.
    console.log("clicked");
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        location = JSON.parse(this.responseText).results[0].locations;
        console.log(location);
        // Extract latitude and longitude
        let latitude = location[0].latLng.lat;
        let longitude = location[0].latLng.lng;
        setCoordinates({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0,
          longitudeDelta: 0.000015,
        });
      }
    });

    URL = `https://www.mapquestapi.com/geocoding/v1/address?location=${searchValue}&key=EySsClgj2jDad4BqD3jP4Vl6jXLd7Hm4`;

    //setResult(URL);
    xhr.open("GET", URL);

    xhr.send();
  };

  useEffect(() => {
    setCoordinates({
      latitude: 32.77652,
      longitude: 35.02261,
      latitudeDelta: 0,
      longitudeDelta: 0.015,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={"green"} />
      <MapView
        initialRegion={coordinates}
        region={coordinates}
        style={styles.map}
      >
        <Marker
          draggable
          title={"your location"}
          onDragEnd={(e) => {
            setCoordinates(e.nativeEvent.coordinate);
            console.log(coordinates);
          }}
          coordinate={coordinates}
        >
          <Image
            source={require("../../assets/images/standingMan.png")}
            style={{ height: 25, width: 25 }}
          />
        </Marker>
      </MapView>

      <View style={styles.topRow}>
        <TouchableOpacity onPress={eventSaveLocation} style={styles.btnSave}>
          <Feather
            style={styles.checkIcon}
            name={"check-square"}
            size={20}
            color={"white"}
          />
        </TouchableOpacity>
        <View style={styles.searchRow}>
          <TouchableOpacity onPress={eventSearch} style={styles.btnSearch}>
            <Text style={styles.btnSearchTxt}>Search</Text>
          </TouchableOpacity>
          <TextInput
            onChangeText={(txt) => setSearchValue(txt)}
            style={styles.searchLocationInput}
            placeholder="Search..."
          />
          <MaterialCommunityIcons
            style={styles.iconMap}
            name={"map-search-outline"}
            size={25}
            color={"#0174BE"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchLocationInput: { width: "73%" },
  searchRow: {
    padding: 8,
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    width: "88%",
  },
  topRow: {
    zIndex: 2,
    position: "absolute",
    padding: 5,
    flexDirection: "row",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3%",
  },
  btnSearch: {
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#D2DE32",
    borderWidth: 1,
    marginStart: 5,
  },
  btnSearchTxt: {
    fontWeight: "500",
    color: "black",
    fontSize: 12,
  },
  btnSave: {
    alignItems: "center",
    backgroundColor: "#7752FE",
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    marginEnd: 5,
  },
  checkIcon: {},
  map: {
    width: "100%",
    height: "100%",
  },
  iconMap: { marginTop: 7, marginStart: 3 },
});
