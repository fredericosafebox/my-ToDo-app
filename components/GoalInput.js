import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

import { StatusBar } from "expo-status-bar";

function GoalInput({
  setList,
  setCounter,
  counter,
  isVisible,
  switchVisibility,
  goal,
  setGoal,
}) {
  const handleChange = (text) => {
    setGoal(text);
  };

  const updateList = (goal) => {
    setList((currentGoalsList) => [...currentGoalsList, { goal, id: counter }]);
  };

  const handleSubmit = () => {
    updateList(goal);
    setCounter((currentCounter) => (currentCounter += 1));
    setGoal("");
    switchVisibility(isVisible);
  };

  return (
    <>
      <StatusBar style="light" />
      <Modal animationType="slide" visible={isVisible}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            placeholder="Your course goal!"
            onChangeText={handleChange}
            style={styles.textInput}
            value={goal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button
                title="Cancel"
                onPress={switchVisibility.bind(this, isVisible)}
                color="#f312a2"
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Add Goal" onPress={handleSubmit} color="#5e0acc" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  buttonWrapper: {
    marginHorizontal: 4,
    marginTop: 16,
    width: 100,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
});
