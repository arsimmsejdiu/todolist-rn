import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/color/colors';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/* this is where the tasks will go! */}
          <Task text="Task 1"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {

  }
});
