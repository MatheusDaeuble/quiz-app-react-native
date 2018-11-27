import React,{ Component} from 'react';
import { View, ActivityIndicator, TouchableOpacity, Text,   Modal } from 'react-native';
import QuizQuestions from './quizQuestions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Creators as QuizActions} from 'store/ducks/quiz';
import styles from './styles';
import { colors } from 'styles';

class Quiz extends Component {

  static navigationOptions ={
    title: 'Quiz',
  };

  state={
    actualIndex:0,
    finish:false,
  }


  changeQuestion=()=>{
    if(this.state.actualIndex+1<this.props.questions.length){
      this.setState({
        actualIndex:this.state.actualIndex+1
      })
    }
  }

  finalizeQuiz=()=>{
    this.setState({finish:true})
    //this.props.navigation.goBack()
  }

  renderModal (){
    return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={this.state.finish}
    onRequestClose={()=>this.props.navigation.goBack()}>
    <View style={styles.modal}>
      <View style={styles.box}>
        <Text style={styles.modalTitle}>Parabéns, você finalizou o quiz!</Text>
          <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.goBack()}>
            <Text style={styles.textButton}>Valeu!</Text>
          </TouchableOpacity>
      </View>
    </View>
  </Modal>  )
  }

  render() {
    console.log(this.props.questions)
    if(this.props.loading){
      return null
    }else{
      return (
        <View style={styles.verticalContainer}>
        {
          this.props.loading ?
          <ActivityIndicator style={styles.loading} size={'large'} color={colors.primary}/>:
          <QuizQuestions
            data={this.props.questions[this.state.actualIndex]}
            numberOfQuestions={this.props.questions.length}
            currentQuestionIndex={this.state.actualIndex}
            changeQuestion={this.changeQuestion}
            onFinalizeQuiz={()=>this.finalizeQuiz()}
            cancelColor={false}
            changeOnAnswer={true}
          />
        }
        {this.renderModal()}
        </View>
    );
    }
  }
}

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  loading: state.quiz.loading,

})

//const mapDispatchToProps = dispatch => bindActionCreators(QuizActions, dispatch);

export default connect(mapStateToProps, null) (Quiz)


