import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component{
	
	constructor(props){
		super(props)
		
		this.state={
			username:'in28minutes',
			password: '',
			hasLoginFailed: false,
            showSuccessMessage: false
		}
		
		this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
	}
	
	handleChange(event){
		
		this.setState({
			[event.target.name]:event.target.value
		})
	}
	
	
	loginClicked(){
		
		        AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
				.then(() =>{
					AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
					this.props.history.push(`/courses`)
				}).catch(() =>{
					this.setState({showSuccessMessage:false})
					this.setState({hasLoginFailed:true})
				})
	}
	
	
	render(){
		
		return(
			<div>
					<div className="container">
					{this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}
					{this.state.showSuccessMessage && <div> Login Successful</div>}
					
						User Name:<input type="text" name="username" value={this.state.username}  onChange={this.handleChange}/>
						Password:<input type="password" name="password" value={this.state.password}  onChange={this.handleChange}/>
						<button className="btn btn-success" onClick={this.loginClicked}>Login</button>
			</div>
			</div>
		)
	}
	
}

export default LoginComponent;