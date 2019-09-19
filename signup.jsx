import React from 'react';
import "./style.css"
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
export default class Signup extends React.Component{
	render(){
		return(
			<div className="form">
				<div className="head">SORRY...</div>
				<NavLink  to="/">
					<button className="btn_goToApp">
						<span className="log">Back to Login</span>
					</button>
				</NavLink>
			</div>
		)
	}
}