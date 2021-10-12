import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [ascending, setAscending] = useState(true);
  const [counterValue, setCounterValue] = useState(0);

  const ascendingCounter = () => {
    setCounterValue((value) => value + 1);
  };

  const descendingCounter = () => {
    setCounterValue((value) => value - 1);
  };

  useEffect(() => {
    const interval = setInterval(
      () => (ascending ? ascendingCounter() : descendingCounter()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [ascending]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Counter Value: {counterValue}</Text>
      <Button title="Reverse" onPress={() => setAscending((value) => !value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
