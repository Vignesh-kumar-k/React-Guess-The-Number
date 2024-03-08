import React from "react";

export default function Result(props){
    let result;
    if(props.term){
        if(props.term > props.secretNum){
            result = 'You Guessed Higher'
        }
        else if(props.term < props.secretNum){
            result = 'You Guessed Lower'
        }
        else {
            result = 'You Guessed Right!'
        }
    }
    return <h3 className="heading">You Guessed : {result}</h3>
}