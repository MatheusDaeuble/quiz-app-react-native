import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as QuizActions} from 'store/ducks/quiz';

StatusBar.setBarStyle("light-content");

class Home extends Component {

  static navigationOptions = {header: null};

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  startQuiz = () => {
    this.props.getQuizRequest();
    this.props.navigation.navigate('Quiz')
  }

  render(){
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao NativeQuiz</Text>
        <Text style={styles.text}> O aplicativo de quiz mais divertido de todos!</Text>
        <View style={styles.form}>
          <TouchableOpacity style={styles.button} onPress={ this.startQuiz }>
            <Text style={styles.buttonText}>Começar!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   products: state.products.data,
//   loading: state.products.loading,
// })

const mapDispatchToProps = dispatch => bindActionCreators(QuizActions, dispatch);

export default connect(null, mapDispatchToProps) (Home)
