import { StatusBar } from "expo-status-bar";
import { useDebugValue, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandlerModal() {
    setModalIsVisible((modal) => !modal);
  }

  function addGoalHandler(goalText) {
    setCourseGoals((goals) => [
      ...goals,
      { text: goalText, key: Math.random().toString() },
    ]);
    addGoalHandlerModal();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((goals) => {
      return goals.filter((goal) => {
        return goal.key != id;
      });
    });
  }
  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={addGoalHandlerModal}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          toggleModal={addGoalHandlerModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.key}
                goal={itemData.item.text}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
