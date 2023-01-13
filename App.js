import { StyleSheet, View, FlatList, Button, TextInput } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [counter, setCounter] = useState(2);
  const [goalsList, setGoalsList] = useState([
    { goal: "Learn React Native", id: 1 },
  ]);

  return (
    <View style={styles.appContainer}>
      <GoalInput
        setList={setGoalsList}
        counter={counter}
        setCounter={setCounter}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.goal}
                id={itemData.item.id}
                setGoalsList={setGoalsList}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 3,
  },
});
