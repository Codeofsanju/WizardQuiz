import React, { Component } from 'react';
import SelectForm from './SelectForm';
import RadioForm from './RadioForm';
import Result from './Result';
import sortHouse from './sortHouse';
import axios from 'axios';


export default class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      answers: [],
      currQuestion: 0
    };
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  async componentDidMount() {
    try {
      const questionEntries = await axios.get('/api/questions');
      console.log(questionEntries.data);
      this.setState({
        questions: questionEntries.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  answerQuestion(ans){
    const newAnswers = this.state.answers;
    const newCurrQuestion = this.state.currQuestion+1;
    newAnswers.push(ans);
    this.setState({
      answers: newAnswers,   
      currQuestion: newCurrQuestion
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/* start here */}
        {this.state.questions.length !== 0 && (
          <div>
            { (this.state.currQuestion < this.state.questions.length) &&
            (this.state.currQuestion % 2 ?
            <SelectForm question={this.state.questions[this.state.currQuestion]} answerQuestion = {this.answerQuestion}/> :
            <RadioForm question={this.state.questions[this.state.currQuestion]} answerQuestion = {this.answerQuestion} />)
            }
            {this.state.currQuestion === 5 && <Result house = {sortHouse(this.state.answers)}/>}
          </div>
        )}
      </div>
    );
  }
}
