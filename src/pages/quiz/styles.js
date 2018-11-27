import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    backgroundColor:colors.backgroundColor,
    paddingTop: metrics.basePadding,
  },
  loading: {
    marginTop: metrics.basePadding,
    color: colors.primary
  },
  modal:{
    backgroundColor:colors.darkTransparent,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box:{
    height: 100,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitle : {
    fontSize:18,
    color: "#333",
    marginBottom:metrics.baseMargin,
  },
  buttonContainer : {
    flexDirection:'row',
    height: 42,
    marginTop:metrics.baseMargin/2,
  },
  button:{
    //flex:1,
    borderRadius: metrics.baseRadius,
    marginRight:15,
    height:42,
    backgroundColor:colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton:{
    color:colors.white,
    marginHorizontal:metrics.baseMargin,
  }

});

export default styles;
