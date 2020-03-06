import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [Goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Objetivos"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.containerBtn}>
          <View style={styles.btn1}>
            <Button title="Cancelar" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.btn2}>
            <Button title="Adicionar" onPress={addGoalHandler} color="black"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
  btn1:{
   width: "48%",
   marginRight: 70,
  },
  btn2:{
   width: "50%"
  }
});

export default GoalInput;

