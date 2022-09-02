import React from 'react';
import Time from '../Time/Time';

import './Message.scss';

const Message = ({ avatar, text, created_at, isme }) => {
    return (
        <div>
            { isme === true ? 
                <div className='message_isMe'>
                    <div className='message_isMe_avatar'>
                        {/* <img src={avatar} alt={`Avatar `} /> */}
                    </div>
                    <div className='message_isMe_content'>
                        <div className='message_isMe_bubble'>
                            <p className='message_isMe_text'>{text}</p>
                        </div>
                        <span className='message_isMe_date'><Time date={created_at} /></span>
                    </div>
                </div>
                :
                <div className='message'>
                    <div className='message_avatar'>
                        <img src={avatar} alt={'Avatar'} />
                    </div>
                    <div className='message_content'>
                        <div className='message_bubble'>
                            <p className='message_text'>{text}</p>
                        </div>
                        <span className='message_date'><Time date={created_at} /></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Message;