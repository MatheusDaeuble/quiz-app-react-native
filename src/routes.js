import { StackNavigator } from 'react-navigation';
import Home from 'pages/home';
import Quiz from 'pages/quiz';
import { metrics, colors } from 'styles'
const createNavigator = () => StackNavigator ({
  Home: {screen: Home},
  Quiz: { screen: Quiz},

},{
  initialRouteName: 'Home',
  navigationOptions: () =>({
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: colors.white,
      height: metrics.heightBars,
    },
    headerTitleStyle:{
      flex: 1,
      textAlign: 'center',
      color: colors.primary,
      fontSize: 20,
      fontWeight: 'bold',
      paddingRight:55
    },
  }),
});

export default createNavigator;
