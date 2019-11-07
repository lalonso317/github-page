import React, { useEffect } from 'react'
import { getDetails } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
// import Icon from '../lib/Icon'


export default function Main(props){
const user = useSelector(appState => appState.listReducer.user)
const dispatch = useDispatch([])

useEffect(()=>{
    dispatch(getDetails())
},[])
    return(
        <div>
            <aside className="aside">
                <img className="logo" src={user.avatar_url}/>
                <h1 className="username">{user.login}</h1>
                <button className="ep">Edit profile</button>
                <p>{user.bio}</p>
             </aside>
        </div>
    )
}