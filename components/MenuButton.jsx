import { View, Text, Animated, TouchableOpacity, Image } from "react-native";
import React, { useState, useRef } from "react";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

export default function MenuButton() {
  const [showMenu, setShowMenu] = useState(false);
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <Animated.View style={{
        flexGrow: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 25,
        paddingVertical: 30,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
    }}>
      <Animated.View
        style={{
          transform: [
            {
              translateY: closeButtonOffset,
            },
          ],
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true,
            }).start();
            Animated.timing(offsetValue, {
              //Your random value
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true,
            }).start();
            Animated.timing(closeButtonOffset, {
              //Your random value
              toValue: showMenu ? 0 : -50,
              duration: 300,
              useNativeDriver: true,
            }).start();
            setShowMenu(!showMenu);
          }}
        >
          <Image
            source={showMenu ? close : menu}
            style={{
              width: 20,
              height: 20,
              tintColor: "black",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}
