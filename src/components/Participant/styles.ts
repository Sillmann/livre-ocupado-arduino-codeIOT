import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16, 
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
  }  
});