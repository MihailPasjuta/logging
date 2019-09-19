import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Complete from './complete';
import Signup from './signup';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
	
	ReactDOM.render((
	<Router>
		
		<TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route path="/login" component={Login}/>
					<Route path="/complete" component={Complete}/>
					<Route path="/signup" component={Signup}/>
					<Redirect from="/" to="/login"/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
	</Router>
	), document.getElementById('root'));