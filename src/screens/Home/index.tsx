import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log("clicou no botao");
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text key="2">React Native</Text>

      <View style={styles.form}>

      <TextInput 
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="red"
        keyboardType="default"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>Click Here</Text>
      </TouchableOpacity>

      </View>

      <Participant />
      <Participant />

    </View>
  )
}