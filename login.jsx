import React from 'react';
import "./style.css"
var validator = require("email-validator");
var result;
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
export default class Login extends React.Component{
	
	constructor(){
		super();
	
		this.state={
			email: '',
			password: '',
			psw_inp: true,
			clicked: true,
			error:'',
			clicked_link: 3,
			clicked_link_ok: 1,
			
			ok_email:"react@snowball.alevel.com",
			ok_password:"YouSimplyTheBest2019"
		}
	this.emailChange=this.emailChange.bind(this)
	this.passwordChange=this.passwordChange.bind(this)
	this.LogIn=this.LogIn.bind(this)
	}
	emailChange(){
		if(event.target.value==this.state.ok_email&&this.state.password==this.state.ok_password){
			this.setState({
				clicked_link_ok: 5
			});
		}
		else
			if(event.target.value!=this.state.ok_email&&this.state.password==this.state.ok_password){
			this.setState({
				clicked_link_ok: 1
			});
		}
		result=validator.validate(event.target.value);
		if(result==true){
		this.setState({
			email: event.target.value,
			psw_inp: false,
			error: ''
		})}
		else
		{
			this.setState({
				error: 'Invalid email address',
				psw_inp: true,
				clicked: true,
				email: ''
			})
		}
	}
	passwordChange(){
		this.setState({
				password: event.target.value,
				clicked: false,
			});
		if(this.state.email==this.state.ok_email&&event.target.value==this.state.ok_password){
			this.setState({
				clicked_link_ok: 5
			});
		}
	}
	
	LogIn(){
		if(this.state.email!=this.state.ok_email||this.state.password!=this.state.ok_password){
			this.setState({
				error: 'Invalid email address or password',
			})
		}
		else
		{
			this.setState({
				error: ''
			});
		}
	}
	
	render(){
		return(
		<div className="form">
			<div className="head">YOUR<br/> ART<br/> MUSEUM</div>
			<div className="address">151 3rd st<br/>San Francisco, CA 94103</div>
			<div className="error">{this.state.error}</div>
			
			<input onChange={this.emailChange} type="text" className="e-mail" placeholder="Email address"/>
			<input onChange={this.passwordChange} disabled={this.state.psw_inp} type="password" placeholder="Password" className="password" />
			
			<div className="forgot"><a href="#" className="forgot_link">Forgot your password?</a></div>
			
			
			<NavLink  to="/complete">
				<button style={{zIndex:this.state.clicked_link_ok }}   onClick={this.LogIn} className="btn_login">
					<span className="log">Log In</span>
				</button>
			</NavLink>
			<button style={{zIndex:this.state.clicked_link}} disabled={this.state.clicked} onClick={this.LogIn} className="btn_login">
					<span className="log">Log In</span>
			</button>
			
			<NavLink  to="/signup">
			<div className="have_not">Don't have an account?</div>
			</NavLink>
		</div>
		)
	}
}
