import React, {Component} from 'react';
// import RadioForm from './RadioForm';
// import SelectForm from './SelectForm';

const createForm = (FormComponent) =>{
    return class StatefulForm extends Component{
        constructor(){
            super();
            this.state = {
                value: ''
            };
            this.submitHandler = this.submitHandler.bind(this);
            this.changeHandler = this.changeHandler.bind(this);
        }
    
        changeHandler(event){
            this.setState({
                value: event.target.value
            });
        }
    
        submitHandler(event){
            event.preventDefault();
            // console.log(this.state.value);
            this.props.answerQuestion(this.state.value);
        }
    
        render(){
            return(
                <FormComponent {...this.props} {...this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>  
            ); 
        }
    };
};

export default createForm;