import React, { useEffect } from 'react'
import { getRepo } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Secondary(props){
const repos = useSelector(appState => appState.listReducer.repos)
const dispatch = useDispatch([])

useEffect(()=>{
    dispatch(getRepo())
},[])
    return(
        <div>
            <div>
                <span>Overview</span>
                <span>Repositories</span>
                <span>Projects</span>
                <span>Packages</span>
                <span>Stars</span>
                <span>Followers</span>
                <span>Following</span>
            </div>
            <div className="repoflex">
            {repos.map((item,i) =>(
                <Link style={{ textDecoration:'none' }} key={"repo"+i} to={item.html_url}>
                <div className="repos" >
                   <span className="reponame">{item.name}</span>
                   <span className="language">{item.language}</span>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}