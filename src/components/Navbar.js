import React, { Component } from 'react'
import Start from './Start'
import logo from './../images/download.png'
import logo2 from './../images/download1.png'
import './bootstrap.css'

import Dropdown from './Dropdown';

class Navbar extends Component {
    
    render() {
        const navList = [{id:1,name:'SignUp',isSignup:true},{id:2,name:'Youtube',isSignup:false},{id:3,name:'Message',isSignup:false},{id:4,name:'Google',isSignup:false},{id:5,name:'Facebook',isSignup:false},{id:6,name:'Gmail',isSignup:false}]
        const navBar = navList.map(navlist => <Start key={navlist.id} name={navlist.name} isSignup={navlist.isSignup}/>)
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
                <div className="navbar-brand ml-2" >
                    <img src={logo} className='navbar-brand' width='95px' height='65px'/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navid">
                    <img src={logo2} className="navbar-toggler-icon"/>
                </button>
                <div className="headmenu collapse navbar-collapse text-center ml-auto" id="navid">
                    <div className="navbar-nav text-center ml-auto">
                        {navBar}     
                        <Dropdown name='About Us'/> 
                    </div>
                </div>

            </nav>    
        )
    }
}

export default Navbar
