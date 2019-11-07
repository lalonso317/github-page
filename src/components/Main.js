import React, { useEffect } from 'react'
import { getDetails } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../lib/Icon'


export default function Main(props){
const user = useSelector(appState => appState.listReducer.user)
const dispatch = useDispatch([])

useEffect(()=>{
    dispatch(getDetails())
},[])
    return(
        <div>
            <header  className="header">
            <div className="leftside">
                <span className="gitlogo"><Icon icon="github"></Icon></span>
                <input className="search"type="text" placeholder="Search or jump to..."/>
                <p className="nav">Pull requests</p>
                <p className="nav">Issues</p>
                <p className="nav">Marketplace</p>
                <p className="nav">Explore</p>
            </div>
            <div className="rightside">
                <span className="bell"><Icon icon="bell"></Icon></span> 
                <span className="plus"><Icon icon="plus"></Icon></span> 
                <span className="caret"><Icon icon="caret-down"></Icon></span> 
                <span><img className="navimg" src={user.avatar_url} /></span> 
                <span className="caret"><Icon icon="caret-down"></Icon></span> 
            </div>
            </header>
            <aside className="aside">
                <img className="logo" src={user.avatar_url}/>
                <h1 className="username">{user.login}</h1>
                <p>{user.bio}</p>
                <button>Follow</button>
             </aside>
        </div>
    )
}