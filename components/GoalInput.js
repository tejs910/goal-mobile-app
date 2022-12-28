import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require("../assets/img/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button onPress={addGoalHandler} title="add goal" color="#5e0acc" />
          </View>
          <View style={styles.btn}>
            <Button
              onPress={props.toggleModal}
              title="Cancel"
              color="#7f6b99"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  img: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 10,
  },
  btnContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
});
export default GoalInput;
