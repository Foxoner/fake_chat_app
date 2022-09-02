import React from 'react';
import DialogsItem from '../DialogsItem/DialogsItem';

const Dialogs = ({ items, onClickFunc }) => {
    const dialogsArray = items.map( (user, i) => {
        return(
            <DialogsItem 
            key={items[i].id}
            dialog_id={items[i].dialog_id}
            fullname={items[i].fullname}
            avatar={items[i].avatar}
            text={items[i].text}
            updated_at={items[i].updated_at}
            onClickFunc={onClickFunc}
            />
        )
    } )
    return (
        <div>{dialogsArray}</div>
    )
}

export default Dialogs;