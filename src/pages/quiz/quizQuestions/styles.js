import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  cardsContainer:{
    flex:1,
    width:'100%'
  },

  progressContainer:{
    flex: 0 ,
    justifyContent:'center',
    alignItems:'center'
  },

  progressText:{
    opacity: 0.65,
    fontFamily: 'Roboto',
    color: 'rgba(1, 1, 1, 0.9)'
  },

  answers:{
    width:'96%'
  },
  boxAnswer:{
    marginRight:12,
    alignContent:'flex-start',
    alignItems:'center'
  },

  main:{
    flex:1,
    padding:metrics.basePadding,
    width:'100%',
  },
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:metrics.baseMargin,
    paddingBottom:metrics.basePadding,
  },
  card:{
    padding:metrics.basePadding/4,
    flex:1,
    borderRadius:metrics.baseRadius
  },
  questionText:{
    fontSize: 18,
    opacity: 0.65,
    fontFamily: 'Roboto',
    color: 'rgba(1, 1, 1, 0.9)'
  },
  textAnswer:{
    fontSize: 16,
    opacity: 0.65,
    fontFamily: 'Roboto',
    color: 'rgba(1, 1, 1, 0.9)',
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    marginRight: metrics.baseMargin/2,
    paddingRight: metrics.basePadding/2,
  },
  textOption:{
    fontWeight:'bold',
    fontSize: 14,
    opacity: 0.65,
    fontFamily: 'Roboto',
    color: '#02b3e4',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginBottom:1
  },
  optionView:{
    height: 26,
    width: 26,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#02b3e4',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginRight:metrics.baseMargin
  },
});

export default styles;
