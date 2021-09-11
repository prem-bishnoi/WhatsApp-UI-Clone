import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutLined from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat'
import userInfo from './UserInfo.json'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebarbar__searchContaier">
                    <SearchOutLined />
                    <input type="text" name="" id="" placeholder="Search or start new chat"/>
                </div>
            </div>

            <div className="sidebar__chats">
                {userInfo.map(val => (
                    <SidebarChat name={val.user} chat={val.message} src={val.src} time={val.time}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar

