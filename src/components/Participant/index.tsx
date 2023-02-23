import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Participant() {
  return(
    <View style={styles.container}>
      <Text style={styles.name}>S.Sillmann</Text>

      <TouchableOpacity 
        style={styles.button}>
        <Text style={styles.buttonText}>Click Here</Text>
      </TouchableOpacity>

    </View>
  )
}