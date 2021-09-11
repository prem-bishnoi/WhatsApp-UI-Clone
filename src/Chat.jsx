import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutLined from '@material-ui/icons/Search';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

const Chat = () => {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        setSeed((new Date).getTime())
    }, [])

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://thispersondoesnotexist.com/image?_=${seed}`} />

                <div className="chat__headerInfo">
                    <h3>Son Of Sardar Gurwinder</h3>
                    <p>last seen today at 8:16 am</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutLined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${false && 'chat__reciever'}`}>
                    {/* <span className="chat__name">Prem Bishnoi</span> */}
                    Hey Guys
                    <span className="chat__timestamp">3:52 pm</span>
                </p>

                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    {/* <span className="chat__name">Prem Bishnoi</span> */}
                    Hey Guys
                    <span className="chat__timestamp">3:52 pm</span>
                </p>
                
            </div>
            
            <div className="chat__footer">
                <InsertEmotionIcon />
                <form action="#">
                    <input onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    {/* <button>Send a message</button> */}
                </form>
                {input ? <SendIcon />:<MicIcon />}
            </div>

        </div>
    )
}

export default Chat
