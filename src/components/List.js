import React from 'react';
import '../index.css';

function List(props) {
    let inputList = props.inputArr;
    const listItems = inputList.map(person => <li>{person}</li>);
    return (
        <ol>{listItems}</ol>
    );
}

export default List;
