import React, {Component} from 'react';
import createForm from './createForm';

const RadioForm = (props)=>{
    return(
        <form onChange = {props.changeHandler}> 
            <label > {props.question.name} </label>
            {
                props.question.choices.map((choice, index)=>
                <label key = {index}> 
                    <input type = 'radio' name = 'answer' value = {choice.value}/> 
                    {choice.label} 
                </label>)
            }
            <button onClick = {props.submitHandler} type='submit'>Next</button>
        </form>
    );
};

export default createForm(RadioForm);