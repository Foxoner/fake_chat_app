import React from 'react';
import Time from '../Time/Time';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './DialogsItem.scss'


const DialogsItem = ({ dialog_id, fullname, avatar, text, updated_at, onClickFunc }) => {
    return (
        <div className='dialogs_item' onClick={() => onClickFunc(dialog_id, avatar, fullname)}>
           <div className='dialogs_item_avatar'>
                <img src={avatar} alt={`${fullname} avatar`} />
           </div>
           <div className='dialogs_item_info'>
                <div className='dialogs_item_info_top'>
                    <b>{fullname}</b>
                    <span>
                        <Time date={updated_at} />
                    </span>
                </div>
                <div className='dialogs_item_info_bottom'>
                    <p>{text}</p>
                    { formatDistanceToNow(new Date(updated_at), {addSuffix: true}) == 'less than a minute ago' ?
                    <img src={require('./green-dot.jpg')} alt=''/>
                    :
                    <div />
                    }
                </div>
           </div>
        </div>
    )
}

export default DialogsItem;