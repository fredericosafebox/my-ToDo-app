import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, setGoalsList, id }) {
  const onPressDelete = (id) => {
    setGoalsList((current) => current.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.individualGoalWrapper}>
      <Pressable
        //Efeito de press em android
        android_ripple={{ color: "red" }}
        //Efeito de press em iOS
        style={(pressed) => pressed && styles.pressedItem}
        onPress={onPressDelete.bind(this, id)}
      >
        <Text style={styles.individualGoal}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  individualGoalWrapper: {
    backgroundColor: "#5e0acc",
    margin: 8,
    borderRadius: 4,
  },
  pressedItem: {
    opacity: 0.5,
  },
  individualGoal: {
    color: "#fff",
    fontWeight: "900",
    padding: 16,
  },
});
