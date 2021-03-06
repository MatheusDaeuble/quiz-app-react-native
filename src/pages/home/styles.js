import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.backgroundColor,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title:{
    textAlign: 'center',
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text:{
    textAlign: 'center',
    marginTop: metrics.baseMargin/2,
    fontSize:14,
    color:colors.regular,
    lineHeight:21,

  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input:{
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,

  },

  button:{
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop:metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText:{
    color:colors.white,
    fontWeight: 'bold',
    fontSize:14,
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },
});

export default styles;
