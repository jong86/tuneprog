import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    backgroundColor: '#222',
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },

  trackControl: {
    width: '33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#545454',
    borderWidth: 2,
    backgroundColor: '#000',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  trackControlText: {
    margin: 0,
    padding: 0,
  },

});
