import React, { useEffect } from 'react'
import { getRepo } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment'
import Icon from '../lib/Icon'


export default function Secondary(props){
const repos = useSelector(appState => appState.listReducer.repos)
const dispatch = useDispatch([])


useEffect(()=>{
    dispatch(getRepo())
},[])
    return(
        <div className="body">
            <div className="reponav">
                <p className="mainnav">Overview</p>
                <p className="mainnav">Repositories</p>
                <p className="mainnav">Projects</p>
                <p className="mainnav">Packages</p>
                <p className="mainnav">Stars</p>
                <p className="mainnav">Followers</p>
                <p className="mainnav">Following</p>
            </div>
            <div className="mids">
                <input className="find" type="text" placeholder="Find a repository..."></input>  
                <button class="type">Type:</button>
                <button class="typelang">Language:</button>
                <button className="newbook"><Icon icon="book"></Icon>New</button>
            </div>
            <div className="repoflex">
            {repos.map((item,i) =>(
                    <div className="repos" key={"repo"+i} >
                        <a style={{ textDecoration:'none' }}  className="reponame" target="blank_" href={item.html_url}>
                            <span>{item.name}</span>
                        </a>
                        <span className={(() => {
                            switch(item.language){
                            case "JavaScript": return "yellow"
                            case "HTML": return "red"
                            case "CSS": return "purple"
                            default: return ""    
                        }
                        })()}>{item.language}</span>
                        <span><Moment fromNow>{item.updated_at}</Moment></span>
                        <span>
                        <button className="star"><Icon icon="star"></Icon>Star</button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}