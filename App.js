import React, { useState } from "react";
import colors from "./assets/color/colors";
import Task from "./components/Task";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import MenuButton from "./components/MenuButton";
import logo from "./assets/to-do-list.png";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <MenuButton />
      {/* Todays Task */}
      <View style={styles.tasksWrapper}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <Image style={{ width: 35, height: 35 }} source={logo} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
          {/* this is where the tasks will go! */}
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* Write a task section */}
      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task ... "}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundMain,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 25,
    height: "75%",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 35,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    backgroundColor: colors.backgroundColor,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 300,
    borderRadius: 50,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colors.backgroundColor,
    borderRadius: 60,
    borderColor: colors.borderColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: colors.squareColor,
  },
});
