import React from 'react'
import './Player.css'
import SideBar from './SideBar'
import Body from './Body'
import Footer from './Footer'


export default function Player({spotify}) {
    return (
        <div className='player'>
        <div className='player_body'>
            {/* sideebar */}
            <SideBar/>
            {/* body */}
            <Body spotify={spotify}/>
            </div>  
            {/* footer           */}
            <Footer spotify={spotify}/>
        </div>
    )
}
