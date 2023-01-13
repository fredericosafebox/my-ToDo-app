import { View, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

function GoalInput({ setList, setCounter, counter }) {
  const [goal, setGoal] = useState("");

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
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal!"
        onChangeText={handleChange}
        style={styles.textInput}
        value={goal}
      />
      <Button title="Add Goal" onPress={handleSubmit} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
    marginRight: 8,
    padding: 8,
  },
});
