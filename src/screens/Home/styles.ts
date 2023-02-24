import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 24
  },
  eventName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventSubName: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'normal',
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: 'yellow',
    borderRadius: 5,
    color: 'blue',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: 'green',
    alignItens: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  }

})