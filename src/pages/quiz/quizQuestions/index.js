import React,{ Component} from 'react'
import { View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { Button , Text as NBText,H2, Card, CardItem,} from 'native-base'
import ProgressBar from './ProgressBar'
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import {metrics, colors} from 'styles';

export default class QuizQuestions extends Component {

  state = {
    answerIndex: -1,
    colorsButtons:[]
  };

  onAnswer = (answerIndex) => {
    this.setState({
      answerIndex,
    })
  };

  renderAnswerButtons = () => {
    const  { answers }  = this.props.data

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const  {correctAnswerIndex}  = this.props.data

    return answers.map((answer, index) =>
    <Animatable.View style={styles.answers} key={index} ref={input => {
      this[`animaButton${index}`] = input;
    }}>
      <TouchableOpacity onPress={()=>this.changeColorButton(index)} style={{flexGrow: 1,
          flex: 1,
          flexDirection:'row',
          padding:metrics.basePadding/4,
          elevation:2,
          marginVertical:metrics.baseMargin/4,
          borderRadius:metrics.baseRadius*2,
          backgroundColor:this.state.colorsButtons.includes(index)? this.checkAnswerCorrect(correctAnswerIndex,index) : '#ffffff'
        }} >
            <View style={styles.optionView}>
              <Text uppercase={true} style={styles.textOption}>
                  {alphabet[index]}
              </Text>
            </View>
            <View style={styles.boxAnswer}>
              <Text uppercase={false} style={styles.textAnswer}>
                {answer}
              </Text>
            </View>
          </TouchableOpacity>
      </Animatable.View>
    )
  };

  checkAnswerCorrect(correctAnswerIndex,index){
    if(!this.props.cancelColor){
      if(correctAnswerIndex===index){

        return colors.success
      }else{
        return colors.danger
      }
    }
  }

  changeColorButton=(index)=>{
    this.setState({colorsButtons:[...this.state.colorsButtons,index]})
    this[`animaButton${index}`].shake(400);

    const  {correctAnswerIndex}  = this.props.data
    if(this.props.changeOnAnswer){
        if(this.props.currentQuestionIndex+1>=this.props.numberOfQuestions){
          this.props.onFinalizeQuiz()
        }else{
          setTimeout(() => {
            this.changeQuestion()
          }, 500);
        }
    }else{
        if(correctAnswerIndex===index){
          if(this.props.currentQuestionIndex+1>=this.props.numberOfQuestions){
            this.props.onFinalizeQuiz()
          }else{
            setTimeout(() => {
              this.changeQuestion()
            }, 500);
          }
        }
      }
  }

  renderProgress = () => {
    const {numberOfQuestions,currentQuestionIndex} =  this.props
      return (
        <View style={styles.progressContainer}>
          <H2 style={styles.progressText}>{(currentQuestionIndex+1) +"/"+ numberOfQuestions}</H2>
          <ProgressBar progress={(currentQuestionIndex+1) / numberOfQuestions} />
        </View>
      )
  };

  changeQuestion(){


    this.setState({
      answerIndex: -1,
    })
    this.props.changeQuestion()
    this.refs.view.bounceInLeft()
    this.setState({colorsButtons:[]})
  }

  componentDidMount(){
    this.refs.view.bounceInLeft()
  }

  render() {

        const { question } = this.props.data


        return (
          <View style={styles.container}>
              <ScrollView style={styles.main}>
                {this.renderProgress()}
                <Animatable.View ref='view' style={styles.cardsContainer}>
                <View>
                    <Card style={styles.card} bordered>
                      <CardItem>
                        <Text style={styles.questionText}>
                          {question}
                        </Text>
                      </CardItem>
                    </Card>
                </View>

                <View style={styles.verticalContainer}>
                  {this.renderAnswerButtons()}
                </View>
                </Animatable.View>
              </ScrollView>
          </View>
        );
      }
    }
