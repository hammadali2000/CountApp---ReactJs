import React from 'react';

function Message (props){
    return(
        <h3 style={{fontSize: '25px'}}>Value of counter is: {props.counter}</h3>
    )
}

export default Message;