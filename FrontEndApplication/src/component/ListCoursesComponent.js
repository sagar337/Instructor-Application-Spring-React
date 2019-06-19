import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService.js';

const INSTR = 'Application'

class ListCoursesComponent extends Component{

	constructor(props){
		super(props)
		this.state={courses:[],
		message:null}
	
	
	     this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
	
	
	}
	
	
	componentDidMount(){
		this.refreshCourses();
	}
	
	
	refreshCourses(){
		
		CourseDataService.retrieveAllCourses(INSTR)
		.then(
		response =>{
			this.setState({courses:response.data})
		})
	}
	
	deleteCourseClicked(id){
		CourseDataService.deleteCourse(INSTR, id)
		.then(
		response =>{
			this.setState({message :`Delete of course ${id} Successful`})
			this.refreshCourses()
		})
	}
	
	addCourseClicked(id){
		console.log("addCourseClicked called")
		this.props.history.push(`/courses/-1`)
	}
	
	updateCourseClicked(id){
		this.props.history.push(`/courses/${id}`)
	}
	render(){
		
		return(
					<div className="container">
							<div  className="container">
									<table  className="table">
											<thead>
													<tr>
															<th>Id</th>
															<th>Description</th>
															<th>Update</th>
															<th>Delete</th>
													</tr>
											</thead>
											
											<tbody>
												{ 
												    this.state.courses.map(
													course =>
													<tr key={course.id}>
														<td>{course.id}</td>
														<td>{course.description}</td>
														<td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
													</tr>
													)
												}
											</tbody>
									</table>
								<div className="row">
									<button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
								</div>
							</div>
					
					</div>
		
		)
	}
}


export default ListCoursesComponent;