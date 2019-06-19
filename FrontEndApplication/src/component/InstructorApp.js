import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CourseComponent from './CourseComponent';



class Instructor extends Component{
	
render(){
	return(
	<div>
	
			<Router>
					         <h1>Instructor Application</h1>
					<Switch>
						 <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
					</Switch>
			</Router>
	</div>
	)
}	
}

export default Instructor;