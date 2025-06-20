import { Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 19 }}>Todo App </Text>
      <TextInput style={styles.input} placeholder="Enter Title" />
      <TextInput style={styles.input} placeholder="Enter Description" />
      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7}>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>Submit </Text>
      </TouchableOpacity>
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn} activeOpacity={0.7}>
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


