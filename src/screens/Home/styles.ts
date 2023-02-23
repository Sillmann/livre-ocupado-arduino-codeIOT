import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 24
  },
  eventName: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
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