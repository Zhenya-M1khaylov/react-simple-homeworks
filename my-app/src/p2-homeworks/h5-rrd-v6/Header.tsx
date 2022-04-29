import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            {/*<NavLink*/}
            {/*    to={'/'}*/}
            {/*    // style={(params)=> {*/}
            {/*    //     return {color: params.isActive ? 'lime' : 'black'}*/}
            {/*    // }}*/}
            {/*    className={({isActive})=>isActive ? 'act' : 'def'}*/}
            {/*></NavLink>*/}
            <NavLink
                to={'/pre-junior'}
                // style={(params)=> {
                //     return {color: params.isActive ? 'lime' : 'black'}
                // }}
                className={({isActive})=>isActive ? 'act' : 'def'}
            >
                pre-junior
            </NavLink>
            <NavLink
                to={'/junior'}
                // style={(params)=> {
                //     return {color: params.isActive ? 'lime' : 'black'}
                // }}
                className={({isActive})=>isActive ? 'act' : 'def'}
            >
                junior
            </NavLink>
            <NavLink
                to={'/juniorPlus'}
                // style={(params)=> {
                //     return {color: params.isActive ? 'lime' : 'black'}
                // }}
                className={({isActive})=>isActive ? 'act' : 'def'}
            >
                juniorPlus
            </NavLink>
        </div>
    )
}

export default Header
