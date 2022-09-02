import React from 'react';
import Message from '../Message/Message';

const ListOfMessage = ({ items }) => {
    const messageArray = items.map( (message, i) => {
        return(
            <Message 
            key={i}
            avatar={items[i].avatar}
            text={items[i].text}
            created_at={items[i].created_at}
            isme={items[i].isme}
            />
        )
    } )
    return (
        <div>{messageArray}</div>
    )
}

export default ListOfMessage;