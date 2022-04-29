import React from 'react'
import c from './Message.module.css'


export type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessagePropsType) {
    return (
        <div className={c.message}>
            <img src={props.avatar} alt="avatar" className={c.avatar}/>
            <div className={c.circle}/>
            <div className={c.content}>
                <div className={c.name}>{props.name}</div>
                <div className={c.text}>{props.message}</div>
                <div className={c.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
