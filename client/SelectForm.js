import React, {Component} from 'react';
import createForm from './createForm';

const SelectForm = (props) => {
    return(
        <form onChange={props.changeHandler}>
            <label>{props.question.name}</label>
            <select value = {props.value}> 
                <option value=''>--</option>
                {
                    props.question.choices.map((choice, index) =><option value ={choice.value} key = {index}> {choice.label} </option>)
                }
            </select>
            <button onClick = {props.submitHandler}  type='submit'>NEXT></button>
        </form>
    );
};



export default createForm(SelectForm);