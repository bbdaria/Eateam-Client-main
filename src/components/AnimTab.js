import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Iconicon5 from "react-native-vector-icons/Ionicons";
import MyMeetings from "./../pages/MyMeetings";
import FindMeetings from "./../pages/FindMeeting";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";

import { Icon } from "react-native-vector-icons/Ionicons";
import { useEffect, useRef } from "react";
const TabArr = [
  {
    route: "MyMeetings",
    label: "Meettings",
    type: Iconicon5,
    inActiveIcon: "people-circle",
    activeIcon: "people-circle-outline",
    component: MyMeetings,
  },
  {
    route: "findMeetings",
    label: "find",
    type: FontAwesome5Icon,
    inActiveIcon: "search",
    activeIcon: "search-plus",
    component: FindMeetings,
  },
  {
    route: "profileSettings",
    label: "profile",
    type: FontAwesome5Icon,
    inActiveIcon: "user-circle",
    activeIcon: "user-circle",
    component: FindMeetings,
  },
  {
    route: "addMeeting",
    label: "addMeeting",
    type: AntDesign,
    inActiveIcon: "addusergroup",
    activeIcon: "addusergroup",
    component: FindMeetings,
  },
];
const Tab = createBottomTabNavigator();
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const IconType = item.type;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.3, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({ 0: { scale: 1.3 }, 1: { scale: 0.8 } });
    }
  }, [focused]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styels.btnsContainer}
      onPress={onPress}
    >
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styels.btnsContainer}
      >
        <IconType
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          size={27}
          color={focused ? "#1640D6" : "#83A2FF"}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};
export default function AnimTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          width: "60%",
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          marginLeft: "15%",
          alignItems: "center",
          borderRadius: 16,
        },
      }}
    >
      {TabArr.map((item, index) => {
        const IconType = item.type;
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              //tabBarLabel: item.label,
              tabBarIcon: ({ color, focused }) => (
                <IconType
                  type={item.type}
                  name={focused ? item.activeIcon : item.inActiveIcon}
                  size={25}
                />
              ),
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

styels = StyleSheet.create({
  btnsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
