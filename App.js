import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [counter, setCounter] = useState(2);
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([
    { goal: "Learn React Native", id: 1 },
  ]);
  const [isVisible, setIsVisible] = useState(false);

  const switchVisibility = (state) => {
    setGoal("");
    if (state) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Open Modal"
          onPress={switchVisibility.bind(this, isVisible)}
          color="#a065e5"
        />
        <GoalInput
          setList={setGoalsList}
          counter={counter}
          setCounter={setCounter}
          isVisible={isVisible}
          switchVisibility={switchVisibility}
          goal={goal}
          setGoal={setGoal}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    backgroundColor: "#1e085a",
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
