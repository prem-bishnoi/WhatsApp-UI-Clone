import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

const SidebarChat = ({ name, chat, src, time }) => {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.random() * 5000)
    }, [])

    return (
        <div className="sidebarChat">
            <Avatar src={src} />

            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{chat}</p>
            </div>
            <div className="sidebarChat__infoTime">
                {time}
            </div>
        </div>
    )
}

export default SidebarChat
