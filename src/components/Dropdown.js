import React, { Component } from 'react'
import DropdownItems from './DropdownItems'
import './bootstrap.css'


class Dropdown extends Component {
    render() {
        const {name} = this.props
        const droplist = [
            {id:1,item:'Home'},{id:2,item:'Message'},{id:3,item:'ReachUs'}
        ]
        const dropbar = droplist.map(droplist => <DropdownItems key={droplist.id} items={droplist.item}/>)
        return (
            
            <div className="dropdown nav-item pl-1 pr-1 text-uppercase">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="">{name}</a>
                <div className="dropdown-menu dropdown-menu-right m-auto text-center">{dropbar}</div> 
            </div>
            
        )
    }
}

export default Dropdown
