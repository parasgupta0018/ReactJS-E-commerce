import React, { Component } from 'react'
import Dropdown from './Dropdown' 
import './bootstrap.css'


class Start extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isSignup : props.isSignup
        }
    }
    
    render() {
        const {name} =this.props
        const SignUp = this.state.isSignup
        if(SignUp){
            return (
                <div className="nav-item pl-1 pr-1 text-uppercase">
                    <a className="nav-link" id="sign" data-toggle="modal" data-target="#myModal"> {name}</a>
                </div>
            )

        }
        else{
            return (
                <div className="nav-item pl-1 pr-1 text-uppercase">
                    <a className="nav-link" href={`https://www.${name}.com/`} target="_blank"> {name}</a>
                </div>
            )
        }
        
       
    }
}

export default Start
